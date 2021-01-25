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
import MemberScreen from "./src/screens/MemberScreen";
import MyProfileScreen from "./src/screens/MyProfileScreen";

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
          component={MyProfileScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Welcome2" component={WelcomeScreen2}/>
        <Stack.Screen name="Scan" component={ScanScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/* <Stack.Screen name="Member" component={MemberScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
