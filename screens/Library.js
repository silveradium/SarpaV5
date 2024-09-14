import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './minor_stacks/Details';
import snakes from '../database/snakes.js';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

// const info = {
// //h
//     english: {
//         name: "Name",
//         family: "Family",
//         venomous: "Venomous",
//         popularity: "Popularity",
//     },
//     sinhala: {
//         name: "නම",
//         family: "පවතින",
//         venomous: "දුරුවා",
//         popularity: "සුපිරි",
//     },
//     tamil: {
//         name: "பெயர்",
//         family: "குடும்பம்",
//         venomous: "விஷமான",
//         popularity: "புகழ்பெற்றது",
//     }
//   };

function Library({ navigation, route }) {

    const { language } = route.params;

    const [snake, setSnake] = useState('');

    /// This part fetches data from the python local host server.

    // const [snakes, setSnakes] = useState([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5000/snakes')
    //         .then(response => response.json())
    //         .then(data => setSnakes(data))
    //         .catch(error => console.error('Error fetching snakes:', error));
    // }, []);

    const SnakeCard = ({item}) => {
        return(
            <TouchableOpacity onPress={() => {navigation.navigate('Details', {
                name: item[language].name,
                description: item[language].description_mid,
                image: item[language].image,
                scientific: item[language].scientific,
            })}} > 
                <View style={styles.card}>  
                    <Image 
                    // source={{ uri: item[language].image }}   /// This is for fetching images from the local host server
                    source={item[language].image}   /// This is for fetching images from the database
                    style={styles.image} />
                    <View style={styles.text}>
                        <Text style={styles.title}>{item[language].name}</Text>
                        <Text style={styles.scientificName}>{item[language].scientific}</Text>
                        <Text style={styles.description}>{item[language].description}</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        );
    }

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/homeBackground.png')} style={ styles.background } />
        <TextInput style={styles.searchBar} 
            placeholder='Search Snake'
            placeholderTextColor="#FFFFFF"
            value = {snake}
            onChangeText = {(text) => setSnake(text)}
            />
            {/* <View style={styles.classifier}>
                <Text style={styles.classifierText}>{info[language].name}</Text>
                <Text style={styles.classifierText}>{info[language].family}</Text>
                <Text style={styles.classifierText}>{info[language].venomous}</Text>
                <Text style={styles.classifierText}>{info[language].popularity}</Text>
            </View> */}
            <View style={styles.adSpace}>
                <Text>Ad Space</Text>
                <Text>This space is left for... ask modi</Text>
            </View>
            <View style={styles.snakeContainer}>
                <FlatList
                    data={snakes}
                    keyExtractor={item => item.id}
                    //ListHeaderComponent={<Text style={styles.title}>Snakes</Text>}
                    renderItem={ SnakeCard }
                    showsVerticalScrollIndicator={false}
                    style={{width: '90%', marginBottom: 100}}
                />
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    //zIndex: -1,
},
searchBar: {
    marginTop: 60,
    width: '85%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#494E4C',
    opacity: 0.59,
    paddingLeft: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 2,
  },
    classifier: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#30312D',
        borderRadius: 10,
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    classifierText: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
    },
    snakeContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: '#30312D',   
        borderWidth: 1,
        shadowColor: 'C4C4C4',
        shadowOffset: {
          width: 2,
          height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.5,
        elevation: 2,
    },
    image: {
        width: 140,
        height: 115,
        borderRadius: 15,
        margin: 5,
    },
    text: {
        paddingRight: 10,
        paddingTop: 10,
        marginLeft: 15,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'white',
    },
    description: {
        marginTop: 5,
        flexShrink: 1,
        width: 160,
        fontSize: 12,
        color: '#F3F3F3',
        fontFamily: 'Poppins-Regular',
    },
    scientificName: {
        fontSize: 9,
        fontFamily: 'Poppins-Regular',
        color: '#F3F3F3',
        marginTop: -3,
    },
    adSpace: {
        width: '100%',
        height: 100,
        backgroundColor: '#6A6B6A',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function Documents({route}) {
    return (
          <Stack.Navigator initialRouteName="Library" >
            <Stack.Screen name="Library" component={Library} initialParams={ route.params } options={{headerShown: false} }/>
            <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
      );
};