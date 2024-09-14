import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from '../screens/Scan';
import ImageDisplay from '../screens/minor_stacks/ImageDisplay';
import Results from '../screens/minor_stacks/Results';
import Details from '../screens/minor_stacks/Details';

const Stack = createStackNavigator();

export default function ScanNavigation() {
    return (
          <Stack.Navigator initialRouteName="Scan" >
            <Stack.Screen name="Scan" component={Scan} options={{headerShown: false}}/>
            <Stack.Screen name="ImageDisplay" component={ImageDisplay} options={{headerShown: false, gestureEnabled: false}} />
            <Stack.Screen name="Results" component={Results} options={{headerShown: false , gestureEnabled: false}}/>
            <Stack.Screen name="Details" component={Details} options={{headerShown: false,  gestureEnabled: false}}/>
          </Stack.Navigator>
      );
};