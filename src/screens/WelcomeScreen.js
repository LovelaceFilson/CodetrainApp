import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../assets/codetrain.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.topic}>CODETRAIN CONTACTS</Text>
      </View>
      <View style={styles.started}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome2");
          }}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    height: 60,
    width: 320,
  },

  topic: {
    fontWeight: "bold",
    fontSize: 24,
  },

  buttonText: {
    fontWeight: "bold",

    fontSize: 20,
  },
  started: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});
