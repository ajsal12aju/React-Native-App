import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Correct way to import a default export
import HomeScreen from './src/screen/HomeScreen';  // If you exported the component like this
import SignUpScreen from "./src/screen/SignupScreen";
import RemindersScreen from "./src/screen/RemindersPage";


import { SafeAreaView } from 'react-native'; // Import SafeAreaView

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaContainer}> {/* Wrap with SafeAreaView */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Reminder"
        >
                    <Stack.Screen name="SingUp" component={SignUpScreen} />
          <Stack.Screen name="Reminder" component={RemindersScreen} />

          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: 20, // Add margin to the top for spacing
  },
});
