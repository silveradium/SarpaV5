import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Medical from './minor_stacks/Medical';
import Prevention from './minor_stacks/Prevention';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const info = {

      english: {
          scanText: "Identify your snake",
          funFact: 'There are 60 endemic snakes in Sri Lanka',
          medicalText: 'First aid measures in case of a snake bite',
          preventionText: 'Prevention and removal of snakes.',
          next: 'Read More',
      },
      sinhala: {
          scanText: 'ඔබේ සර්පයා හඳුනා ගන්න',
          funFact: 'ලංකාවට ආවේණික සර්පයන් 60ක් ඉන්නවා',
          medicalText: 'සර්ප දෂ්ඨනයකදී ප්‍රථමාධාර පියවර',
          preventionText: 'සර්පයන් වැළැක්වීම සහ ඉවත් කිරීම',
          next: 'තවත් කියවන්න',
      },
      tamil: {
          scanText: 'உங்கள் பாம்பை அடையாளம் காணுங்கள்',
          funFact: 'இலங்கையில் 60 உள்ளூர் பாம்புகள் உள்ளன',
          medicalText: 'பாம்பு கடித்தால் முதலுதவி',
          preventionText: 'பாம்புகளைத் தடுத்தல் மற்றும் அகற்றுதல்',
          next: 'மேலும் வாசிக்க',
      }
    };


function HomeScreen( { navigation, route } ) {


  const { language } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/homeBackground.png')} style={ styles.background } />
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}><Image source={require('../assets/icons/Profile.png')} style={ styles.profile } /></TouchableOpacity>
        <View style={styles.brandContainer}><Text style={styles.brand}>Sarpa</Text></View>
        <TouchableOpacity style={styles.settingsContainer}><Image source={require('../assets/icons/settings.png')} style={ styles.settings } /></TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.scanNavigate} onPress={() => navigation.navigate('ScanNavigation')}>
            <Image source={require('../assets/images/scanthing copy.png')} style={ styles.background } />
            <Text style={styles.scanText}>{info[language].scanText}</Text>
        </TouchableOpacity>
        <View style={styles.funFact}>
            <Text style={styles.funFactDescription}>{info[language].funFact}</Text>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate('Medical')}} >
                <View style={styles.card}>
                    <Image source={require('../assets/images/medical.png')} style={ styles.image } />
                    <View style={styles.text}>
                        <Text style={styles.title}>{info[language].medicalText}</Text>
                        <Text style={styles.description}>{info[language].next}</Text>
                    </View>
                </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Prevention')}} >
                <View style={styles.card}>
                    <Image source={require('../assets/images/prevention.png')} style={ styles.image } />
                    <View style={styles.text}>
                        <Text style={styles.title}>{info[language].preventionText}</Text>
                        <Text style={styles.description}>{info[language].next}</Text>
                    </View>
                </View>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
},
header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    height: '5%',
    backgroundColor: 'transparent',
},
profile: {
    width: 40,
    height: 40,
    marginLeft: 12,
    marginTop: 5,
    borderRadius: 30,
},
brand: {
    fontSize: 29,
    color: '#D8D8D8',
    fontFamily: 'AveriaSerifLibre-Regular',
},
settings: {
    width: 30,
    height: 30,
    marginRight: 12,
    marginTop: 5,
},

body: {
    marginTop: "5%",
    alignItems: 'center',
    marginBottom: "20%",
},
scanNavigate: {
    width: "90%",
    height: "31%",
    borderRadius: 100,
    // justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 2,
    marginBottom: 15,
},
scanText: {
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
    color: '#D8D8D8',
    marginLeft: 10,
    marginTop: 10,
    // position: 'absolute',
    width: 150,
    padding: 10,

    zIndex: 1,
},
funFact: {
    width: '90%',
    height: "15%",
    // borderRadius: 20,
    // padding: "",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
},
funFactDescription: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#D8D8D8',
    marginLeft: 10,
},


card: {
  flexDirection: 'row',
  width: '90%',
  height: 110,
  borderRadius: 20,
  marginTop: 5,
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
  width: "40%",
  height: "100%",
  borderRadius: 15,
},
text: {
  paddingRight: 10,
  paddingTop: 10,
  marginLeft: 15,
  width: 160,
},
title: {
  fontSize: 10,
  fontFamily: 'Poppins-SemiBold',
  color: 'white',
  marginBottom: 5,
},
description: {
  marginTop: 5,
  flexShrink: 1,
  width: 160,
  fontSize: 8,
  color: '#F3F3F3',
  fontFamily: 'Poppins-Regular',
}

});

export default function Home({route}) {

  const { language } = route.params;
  //console.log(language);

    return (
          <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={route.params} options={{headerShown: false}}/>
            <Stack.Screen name="Medical" component={Medical} options={{headerShown: false}}/>
            <Stack.Screen name="Prevention" component={Prevention} options={{headerShown: false}}/>
          </Stack.Navigator>
      );
};

