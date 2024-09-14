import React from "react";
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';



export default function Scan({ navigation }) {

    const [image, setImage] = useState('https://reactnative.dev/img/tiny_logo.png');

    const [imageUri, setImageUri] = useState(null);

    const onCamera = () => {

    //   navigation.navigate('Results');
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
            navigation.navigate('ImageDisplay', {image: image.path});
          });
    };

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            console.log(image);
            setImage(image.path);
            navigation.navigate('ImageDisplay', {image: image.path});
          });

    };

    const pickImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImageUri(image.path);
            sendImageToServer(image.path);
        }).catch(error => {
            console.error('Error picking image:', error);
        });
    };

    const sendImageToServer = async (uri) => {
        const formData = new FormData();
        formData.append('image', {
            uri: uri,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/scanPage.png')} style={ styles.background } />
            <View style={styles.heading}>
                <Text style={styles.title}>Identify your Snake</Text>
                <Text style={styles.subtitle}>Please upload a clear, cropped up image of your snake</Text>
            </View>
            <View style={styles.camera}>
                <TouchableOpacity onPress={onCamera} style={styles.cameraButton}>
                    <View style={styles.cameratextcontainer}><Text style={styles.cameratext}>Capture from Camera</Text></View>
                    <View style={styles.badge}>
                        <Image source={require('../assets/images/camera.png')} style={styles.image} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.camera}>
                <TouchableOpacity onPress={onGallery} style={styles.cameraButton}>
                <View style={styles.cameratextcontainer}><Text style={styles.cameratext}>Pick from the gallery</Text></View>
                    <View style={[styles.badge, {backgroundColor: 'rgba(222, 222, 222, 0.5)'}]}>
                        <Image source={require('../assets/images/gallery.png')} style={styles.image} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}></View>
            
            
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
    },
    heading: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    title: {
        fontSize: 31,
        fontWeight: 'bold',
        color: '#CADDD4',
        margin: 10,
        marginLeft: 30,
    },
    subtitle: {
        fontSize: 15,
        color: '#CADDD4',
        marginLeft: 30,
        fontFamily: 'Poppins-Light',

    },  
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    gallery: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cameraButton: {
        width: "80%",
        height: 130,
        borderRadius: 20,
        backgroundColor: 'rgba(217, 217, 217, 0.34)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cameratextcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },
    cameratext: {
        fontSize: 19,
        color: 'white',
        fontFamily: 'Poppins-Medium',
    },
    badge: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: 'rgba(222, 222, 222, 0.34)',
        justifyContent: 'center',   
        alignItems: 'center',
    },
    image: {
        width: 50,
        // height: 50,
    },
    top: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});