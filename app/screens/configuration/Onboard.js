import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Onboard( { navigation } ) {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/images/onboard.png')} style={ styles.background } />
        <Image source={require('../../assets/icons/next.png')} style={ styles.nextIcon} />
        <View style={styles.top}></View>
        
        <View style={styles.bottom}>
            <View style={styles.nextpart}>
                <TouchableOpacity onPress={() => navigation.navigate('Language')} style={styles.next}><Text></Text></TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Welcome to</Text>
            <Text style={styles.title}>Sarpa</Text>
            <TouchableOpacity  style={styles.signup}><Text style= {styles.signuptext}>Sign Up</Text></TouchableOpacity>
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
        flex: 2,
    },
    bottom: {
        flex: 1,
        width: '100%',
    },
    nextpart: {
        flexDirection: 'row-reverse',
        width: '100%',
        height: 50,
    },
    next: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginRight: -50,
        transform: [{rotate: '45deg'}],
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        shadowColor: 'black',
        shadowOffset: {
          width: 3,
          height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 2,
    },
    nextIcon: {
        position: 'absolute',
        right: 18,
        bottom: 225,
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    subtitle: {
        marginTop: 50,
        fontSize: 20,
        fontFamily: 'Poppins-Light',
        color: '#F3F3F3',
        marginLeft: 50
    },
    title: {
        fontSize: 56,
        fontFamily: 'Poppins-Medium',
        color: '#3D7158',
        marginLeft: 30,
        marginTop: -10
    },
    signup: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        // shadowColor: 'black',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3.5,
        // elevation: 2,
    },
    signuptext: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#F3F3F3',
    }   
});