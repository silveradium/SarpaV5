import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default function ImageDisplay({navigation, route}) {

  const { image } = route.params;
  const [loading, setLoading] = useState(false);

  const sendImageToServer = async (uri) => {
    const formData = new FormData();
    formData.append('image', {
        uri: uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
    });

    // const timer = setTimeout(() => {
    //   const result = {"predictions": [[0.015448784828186, 0.00003093261329922825, 0.86009042960300575942, 0.00008635463018435985, 0.000012032398444716819, 0.08430565893650055, 0.04002584856702014804]]}
    //   console.log("resultzz", result)
    //   navigation.navigate('Results', {result: result});
    //   }, 1000);

    // Cleanup the timer on component unmount
    // return () => clearTimeout(timer);
    try {
        const response = await fetch('http://192.168.1.189:5000/predict', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        const result = await response.json();
        console.log("resultzz", result)
        navigation.navigate('Results', {result: result});
    } catch (error) {
        console.error('Error:', error);
    }
};

  useEffect(() => {
    sendImageToServer(image);
    // Show the spinner
    // setLoading(true);

    // // Hide the spinner after 5 seconds
    // const timer = setTimeout(() => {
    //   setLoading(false);
    //   navigation.navigate('Results');
    // }, 5000);

    // // Cleanup the timer on component unmount
    // return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}><Image source={{ uri: image }} style={styles.image} /></View>
      <Spinner
        visible={loading}
        textContent={'Identifying...'}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: -1,

  },
  image: {
    width: '100%',
    height: '100%',
      resizeMode: 'contain',
    backgroundColor: 'black',
    width: '100%',
    shadowColor: 'black',
}, 
top: {
    flex: 2,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
bottom: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
spinnerTextStyle: {
  color: '#FFF',
  fontFamily: 'Poppins-Semibold',
  fontSize: 20,
}
});