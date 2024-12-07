import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerShown: false
     }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
