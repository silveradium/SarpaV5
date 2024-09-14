import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function SignUp( { navigation } ) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Language" onPress={() => navigation.navigate('Language')} />
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
});