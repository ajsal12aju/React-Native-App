import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('../assets/bg.jpg')} // Ensure the path is correct
        style={styles.backgroundImage}
      >
        {/* Transparent Overlay */}
        <View style={styles.overlay}>
          {/* Content */}
          <Text style={styles.text}>Login</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the screen
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray transparency
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // White text for contrast
  },
});

export default LoginScreen;
