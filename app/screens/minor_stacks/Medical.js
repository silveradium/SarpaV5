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
          <Text style={styles.mainTitle}>First Aid</Text>
          <Text style={styles.mainSubTitle}>What to do in case of a snake bite</Text>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Image source={require('../../assets/icons/previous.png')} style={ styles.back } /></TouchableOpacity>
        </LinearGradient>
        <View style={styles.bottom}>
          <View style={styles.content}>
            <ScrollView>
              <Text style={styles.headText}>Snake Bite post care and first aid</Text>
            <Text style={styles.text}>Of the 100 snake species in Sri lanka, only 11 are of concern. Still, it is safer to be cautious around snakes, for a snake bite can cause serious complications if it is not treated promptly.{`\n\n`}
As snake bites can potentially be fatal, always treat a snake bite as a medical emergency even a non-venomous bite would require medical attention including a tetanus shot. Call for help early and bring the victim to the nearest Emergency Department for further evaluation.
            </Text>
            <Text style={styles.headText}>Do's and don'ts for handling a snake bite</Text>
            <Text style={styles.headText}>Do’s</Text>
            <Text style={styles.headText}>Stay calm and seek medical attention
            </Text>
            <Text style={styles.text}>Do not panic as most snakes are non-venomous. Move the person away from the snake. It’s helpful to remember what the snake looks like, its size, and the type of snake if you know it. Tell this to the emergency room staff. Also, take note of the timing of the bite.{`\n\n`}
Let the person lie in a semi-reclined position with the bite wound below the level of the heart. This prevents the venom from spreading to other parts of the body until medical help arrives. Try to avoid moving the individual as much as possible..{`\n\n`}
Remove any jewelry, watches, and constrictive clothes in case of swelling
</Text>
            <Text style={styles.headText}>Clean the wound</Text>
            <Text style={styles.text}>If there is bleeding, stop it first by applying pressure on the bite wound. When the bleeding stops, clean the wound with soap and water to prevent infection. Dress up the wound, cover the area with a clean, cool compress or a moist dressing to ease swelling and discomfort. Do not wash the wound under running water.
            </Text>
            </ScrollView>
            
          </View>
        </View>
        <Image source={require('../../assets/images/medical.png')} style={ styles.background } />
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