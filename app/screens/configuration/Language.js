import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Language( { navigation } ) {

    const handleEnglish = () => {
        navigation.navigate('BottomNavigation', { language: 'english' });
    };
    const handleSinhala = () => {
      navigation.navigate('BottomNavigation', {language: 'sinhala' });
  };
  const handleTamil = () => {
    navigation.navigate('BottomNavigation', {language: 'tamil' });
};
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/onboard.png')} style={ styles.background } />
        <View style={styles.top}></View>
        <View style={styles.bottom}>
            <Text style={styles.title}>Language</Text>
            <TouchableOpacity onPress={handleEnglish} style={styles.buttons}><Text style={styles.text}>English</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleSinhala} style={styles.buttons}><Text style={styles.text}>සිංහල</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleTamil} style={styles.buttons}><Text style={styles.text}>தமிழ்</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    //zIndex: -1,
    },
    top: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#CADDD4',
        margin: 10
    },
    buttons: {
        width: '80%',
        height: 50,
        backgroundColor: 'rgba(117, 117, 117, 0.61)',
        shadowColor: 'black',
        shadowOffset: {
          width: 3,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
    }
});