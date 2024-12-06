import React from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')} // Verify this path
        style={styles.imageBackground}
        resizeMode="cover" // Makes sure the image scales properly
      >
        <Text style={styles.text}>Hello</Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1, // Ensures the image background fills the container
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  text: {
    color: '#fff', // Makes text visible on the background
    fontSize: 24,
    fontWeight: 'bold',
  },
});
