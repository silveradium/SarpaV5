import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



function Characteristics({Title, Value, Icon, width}) {

  const icons = {
    danger: require('../../assets/icons/danger.png'),
    length: require('../../assets/icons/length.png'),
    conservation: require('../../assets/icons/danger.png'),
    // Add other icons here
  };


  return (
    <View style={styles.characteristic}>
            <Image source={icons[Icon]} style={ [styles.characteristicIcon, {tintColor: 'white'}] } />
            <View style={styles.characteristicText}>
              <Text style={styles.characteristicTitle}>{Title}</Text>
              <Text style={styles.characteristicValue}>{Value}</Text>
            </View>
          </View>
  )
}

function Overview( route) {

  const {description } = route.route.params;

  return (
    <View style={styles.containerChild}>
      <View style={styles.contentChild}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.charactersistics}>

          <Characteristics Title="Danger" Value="Highly Venomous" Icon="danger" width=""/>
          <Characteristics Title="Length" Value="120-160 cm" Icon="length"/>
          <Characteristics Title="Conservation" Value="Not evaluated" Icon="conservation"/>
          <Characteristics Title="Danger" Value="Highly Venomous" Icon="danger"/>

          
        </View>
      </View>
    </View>
  );
}

function Taxonomy() {
  return (
    <View style={styles.containerChild}>
    <View style={{ height: "83%", width: "90%", backgroundColor: "#2B2B2B", justifyContent: 'center', borderRadius: 23, padding: 10}}>
    
    <ScrollView style={{alignContent: 'center',}}>
          <Image source={require('../../assets/images/Taxonomy.png')} style={{ width: "100%", resizeMode: 'contain' }} />
    </ScrollView>
    </View>
  </View>
  );
}

function Discription(route) {
  const { description } = route.route.params;
  return (
    <View style={styles.containerChild}>
      <View style={styles.contentChild}>
        <ScrollView> 
        {/* <Text style={styles.description}>The head is flat, triangular, distinct from neck, with a blunt, raised snout. Large nostrils are centered in single nasal scales. The crown has fragmented scales, with narrow supraoculars separated by 6-9 scales. Large eyes with yellow flecks are surrounded by 10-15 circumorbital scales. There are 10-12 supralabials, with the 4th and 5th larger, separated from the eye by 3-4 suboculars. The front pair of chin shields is enlarged.{'\n'}{'\n'}
The maxillary bones support 2-6 pairs of fangs, reaching 16.5 mm in length. The body is stout and circular, with strongly keeled dorsal scales (27-33 mid-body rows), except for the smooth lowest row. Ventrals number 153-180, with an undivided anal plate. The short tail comprises 14% of total length, with 41-68 paired subcaudals.
Coloration includes a yellow to brown base with three series of dark brown, black-ringed spots. The head features dark temple patches and a V or X marking. A dark, light-outlined streak runs behind each eye. The venter is light-colored with scattered dark spots.{'\n'}{'\n'}
Russell's viper averages 120 cm in mainland Asia, slightly shorter on islands, with a maximum length of 166 cm. It has a more slender build compared to most vipers.</Text> */}
<Text style={styles.description}>{description}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
function Location( route) {


  return (
    <View style={styles.containerChild}>
      <View style={styles.contentChild}>
        <Text style={[styles.description, {fontSize: 13}]}>The Russell’s viper is found mostly in the Central Province</Text>
        <Image source={require('../../assets/maps/map.png')} style={{ width: "100%", height: "100%", tintColor: '#D9D9D9' }} />
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App({ navigation, route }) {

  const { name, description, image, scientific } = route.params;

  return (
    // <NavigationContainer independent={true} >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Image source={require('../../assets/icons/previous.png')} style={ styles.back } /></TouchableOpacity>
        
      <Image 
      //source={{ uri: image }}   /// with local server images
      source={image}
      style={ styles.background } />
      <View style={styles.lineargradient}></View>
      <View style={styles.heading}>
        {/* <Image source={require('../../assets/snakeImages/Russell_s Viper2.jpg')} style={styles.image} /> */}
        <Text style={styles.snakeName} >{name}</Text>
        <Text style={styles.scientificName} >{scientific}</Text>
      </View>
        <View style={styles.tabContainer}>
          <Tab.Navigator 
                        screenOptions={{
                          
                          tabBarLabelStyle: { fontSize: 12, fontFamily: "Poppins-Light", color: "white", width: "100%", textAlign: "center"},
                          tabBarStyle: { position: 'absolute',
                            top: 0,
                            left: 20,
                            right: 20,
                            height: 45,
                            borderTopWidth: 1,
                            borderTopColor: 'white',
                            borderRadius: 14,
                            backgroundColor: "transparent",
                            tabBarPressOpacity: 90,
                           },
                           tabBarIndicatorStyle: {
                            backgroundColor: "white",
                            height: 1,
                            width: "25%",
                            // height: "80%",
                            // width: "30%",
                            // marginLeft:5,
                            // marginBottom: 4,
                            // borderRadius:10,
                            // backgroundColor: "black", // This removes the underline
                          },
                          
          
                        }}>
            <Tab.Screen name="Overview" component={Overview} initialParams={{ description }}/>
            <Tab.Screen name="Taxonomy" component={Taxonomy} />
            <Tab.Screen name="Discription" component={Discription} initialParams={{ description }}/>
            <Tab.Screen name="Distribution" component={Location} />
          </Tab.Navigator>
        </View>
      </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 400, // Adjust this value as needed to control the height of the image
    top: 0,
    resizeMode: 'contain',
    // marginTop: -300,
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    width: 30,
    height: 30,

  },
  lineargradient: {
    position: 'absolute',
    width: '100%',
    height: 400, // Adjust this value as needed to control the height of the image
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heading: {
    position: "absolute",
    width: '100%',
    top: Dimensions.get('window').height / 2.9,
    fontSize: 36,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  snakeName: {
    width: '100%',
    marginLeft: 20,
    color: 'white',
    fontFamily: "Poppins-Semibold",
    fontSize: 31,
  },
  scientificName: {
    width: '100%',
    marginLeft: 30,
    color: 'white',
    fontFamily: "Poppins-Light",
    fontSize: 13,
  },
  tabContainer: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 2.1, // Adjust this value to control the vertical position of the tab bar
    borderRadius:10,
    backgroundColor: 'black',
  },

  containerChild: {
    flex: 1, flexDirection: "column-reverse", 
    alignItems: 'center', 
    backgroundColor: "black"  
  },
  contentChild: {
    height: "83%", 
    width: "90%", 
    backgroundColor: "#2B2B2B", 
    // justifyContent: 'center', 
    padding: 25,
    borderRadius: 23,
  },
  description: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 10,
  },


  charactersistics: {
    flexDirection: "row",
    justifyContent: "flex-wrap",
    flexDirection: 'row',
    alignItems: 'flex-start',
    //justifyContent: 'space-between',
    gap: 5,
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 30,
  },
  characteristic: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "48%",
    height: 70,
    margin: 1,
    padding: 10,
    backgroundColor: "#3D3D3D",
    borderRadius: 10,
  },
  characteristicIcon: {
    width: 30,
    height: 30,
  },
  characteristicText: {
    marginLeft: 10,
  },
  characteristicTitle: {
    color: "white",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
  characteristicValue: {
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 12,
    width: 100,
  },
});
