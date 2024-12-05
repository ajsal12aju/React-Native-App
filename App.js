import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const { width } = Dimensions.get('window'); // Get the screen width

  return (
    <View style={[styles.container, width > 768 && styles.webContainer]}>
      <Text>Updated data</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webContainer: {
    maxWidth: 400, // Limit the width for browser views
    marginHorizontal: 'auto', // Center it horizontally
  },
});
