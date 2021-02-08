import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MemberScreen from "../screens/MemberScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ScanScreen from "../screens/ScanScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import WelcomeScreen2 from "../screens/WelcomeScreen2";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();
function AppContainer({ auth, logout }) {
  return (
    <NavigationContainer>
      {auth.login ? (
        <Stack.Navigator initialRouteName="Home">
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
                    // style={styles.buttonContainer}
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
            component={MemberScreen}
          />
        </Stack.Navigator>
      ) : (
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
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { logout })(AppContainer);
