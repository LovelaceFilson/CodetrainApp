import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { loginEmailAccount } from "../redux/actions/authActions";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = () => {
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { navigation, auth } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.comapanyImage}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.credential}>
          <View style={styles.formContainer}>
            <View style={styles.email}>
              <Text style={styles.emailText}>Email</Text>

              <View style={styles.input}>
                {auth.error.login && (
                  <Text style={{ color: "red" }}>{auth.error.login}</Text>
                )}
                <TextInput
                  placeholderTextColor="#aaaaaa"
                  placeholder="lacey.filson@gmail.com"
                  value={this.state.email}
                  onChangeText={(text) => {
                    this.handleUpdateState("email", text);
                  }}
                />
              </View>
            </View>
            <View style={styles.password}>
              <Text style={styles.passwordText}>Password</Text>

              <View style={styles.input2}>
                <TextInput
                  placeholderTextColor="#aaaaaa"
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(text) => {
                    this.handleUpdateState("password", text);
                  }}
                  placeholder="*****"
                />
              </View>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={this.handleOnSubmit}
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

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { loginEmailAccount })(LoginScreen);
