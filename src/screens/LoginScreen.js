import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.comapanyImage}>
        <Image source={require("../assets/profile.jpg")} style={styles.image} />
      </View>
      <View style={styles.credential}>
        <View style={styles.formContainer}>
          <View style={styles.email}>
            <Text style={styles.emailText}>Email</Text>

            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="lacey.filson@gmail.com"
              />
            </View>
          </View>
          <View style={styles.password}>
            <Text style={styles.passwordText}>Password</Text>

            <View style={styles.input2}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                secureTextEntry={true}
                placeholder="*****"
              />
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Forgot?</Text>
          <View style={styles.noAccount}>
            <Text>Reset Password</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: 380,
  },
  buttonContainer: {
    alignSelf: "center",
    height: 50,
    width: 320,
    borderRadius: 6,
    backgroundColor: "#f4511e",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 80,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  noAccountContainer: {
    flexDirection: "row",
    marginVertical: 90,
  },
  noAccount: {
    marginLeft: 6,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  formContainer: {
    marginVertical: 40,
    fontSize: 30,
  },
  email: {
    flexDirection: "row",
    marginVertical: 20,
    borderBottomColor: "#c1c8d4",
    borderBottomWidth: 1,
  },
  password: {
    flexDirection: "row",
    textDecorationLine: "underline",
  },

  credential: {
    marginHorizontal: 40,
  },
  input: {
    marginHorizontal: 60,
    textAlign: "right",
  },
  input2: {
    marginHorizontal: 60,
    textAlign: "right",
  },
});
