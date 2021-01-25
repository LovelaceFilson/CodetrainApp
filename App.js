import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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
            header: () => null,
          }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Welcome2"
          component={WelcomeScreen2}
        />

        <Stack.Screen
          options={{
            title: "Sign In",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerBackTitle: "",
            headerTintColor: "#fff",
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerBackTitle: "",
            headerTintColor: "#fff",
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            title: "Codetrain",

            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerBackTitle: "",
            headerTintColor: "#fff",

            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("MyProfile");
                  }}
                  style={styles.buttonContainer}
                >
                  <AntDesign name="user" size={25} color="white" />
                </TouchableOpacity>
              </View>
            ),
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerBackTitle: "",
            headerTintColor: "#fff",
          }}
          name="MyProfile"
          component={MyProfileScreen}
        />

        <Stack.Screen
          options={{
            headerBackTitle: "",
          }}
          name="Scan"
          component={ScanScreen}
        />

        <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerBackTitle: "",
          headerTintColor: "#fff",
        }}
         name="Member" 
         component={MemberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
