import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function App({ navigation }) {
  return (
    // <NavigationContainer independent={true} >
      <View style={styles.container}>
         <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', '#312E2D']}
        style={styles.linearGradient}
        >
          <Text style={styles.mainTitle}>Prevention</Text>
          <Text style={styles.mainSubTitle}>Prevention is better than cure</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Image source={require('../../assets/icons/previous.png')} style={ styles.back } /></TouchableOpacity>
        </LinearGradient>
        <View style={styles.bottom}>
          <View style={styles.content}>
            <ScrollView>
              <Text style={styles.headText}>Preventive actions</Text>
            <Text style={styles.text}>Encountering a snake can be alarming, but with the right knowledge and approach, you can safely coexist with these often misunderstood creatures. This guide provides practical advice on how to handle snake encounters, both outdoors and inside your home, as well as tips to minimize future interactions. By understanding snake behavior and taking simple preventive measures, you can ensure safety for yourself and respect for local wildlife

            </Text>
            <Text style={styles.headText}>Outdoor Encounters</Text>

            <Text style={styles.text}>When encountering a snake outdoors, even on your property, the best action is to wait for it to leave on its own. Approaching or scaring it may lead to conflict. Non-venomous snakes can help control pests like mice and rats. If necessary, gently spray it with a garden hose to encourage it to move.{`\n`}{`\n`}
Only take action if you suspect the snake is venomous. Exercise caution around snakes with triangular heads, brown or black colours or vertical pupils. Familiarize yourself with venomous species in your area. If you see a potentially venomous snake, contact local animal control or a wildlife center for advice. Don't approach, handle, or kill the snake.

</Text>
            <Text style={styles.headText}>For indoor snakes:</Text>
            <Text style={styles.text}>If there is bleeding, stop it first by applying pressure on the bite wound. When the bleeding stops, clean the wound with soap and water to prevent infection. Dress up the wound, cover the area with a clean, cool compress or a moist dressing to ease swelling and discomfort. Do not wash the wound under running water.
            </Text>
            </ScrollView>
            
          </View>
        </View>
        <Image source={require('../../assets/images/prevention.png')} style={ styles.background } />
      </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302F2E',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    width: 30,
    height: 30,

  },
  linearGradient: {
    flex: 1,

    justifyContent: 'center',
  },

  mainTitle: {
    color: '#FFFFFF',
    fontSize: 31,
    fontFamily: 'Poppins-SemiBold',

    marginTop: 10,
    marginLeft: 40,
  },
  mainSubTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Light',
    marginLeft: 40,
  },
  
  bottom: {
    flex: 2,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    resizeMode: 'cover',
    width: '100%',
    height: '30%',
    zIndex: -1,
    },
  back: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    width: 30,
    height: 30,

  },
  content: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    width: '90%',
    borderRadius: 20,
    padding: 20,
    // alignItems: 'center',
  },
  headText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    marginBottom: 15,
  },
});