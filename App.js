import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import WelcomeScreen2 from "./src/screens/WelcomeScreen2";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import ScanScreen from "./src/screens/ScanScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          options={{
            title: "Codetrain",

            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",

            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <AntDesign name="user" size={25} color="white" />
              </View>
            ),
          }}
          name="Welcome"
          component={ScanScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
