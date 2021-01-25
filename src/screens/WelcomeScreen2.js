import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function WelcomeScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.comapanyImage}>
        <Image source={require("../assets/profile.jpg")} style={styles.image} />
      </View>
      <View>
        <Text style={styles.topic}>
          KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN
        </Text>
      </View>
      <View>
        <Text style={styles.sigin}>
          Sign in or register with your Codetrain email
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.started}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.buttonText1}>REGISTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.started}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText2}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.999,
    backgroundColor: "white",
  },
  image: {
    height: 370,
    width: 375,
  },
  topic: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  sigin: {
    opacity: 0.4,
    fontSize: 15,
    textAlign: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    fontWeight: "bold",
    fontSize: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginVertical: 90,
  },

  started: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});
