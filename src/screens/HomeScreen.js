import React from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topic}>
        <Text style={styles.contact}>Exchange Contact Information</Text>
        <Text style={styles.share}>
          Scan this QR below to share your contacts
        </Text>
      </View>
      <View style={styles.qrContainer}>
        <QRCode content="https://reactnative.com" />
      </View>

      <View style={styles.profile}>
        <Image source={require("../assets/profile.jpg")} style={styles.image} />
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileName}>Abraham Lincoln</Text>
          <Text style={styles.profileRole}>Head of Marketing</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.scanContainer}>
          <Text style={styles.scanText}>Want to add a new connection?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Scan");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 75,
    marginRight: 20,
    alignSelf: "center",
  },
  buttonContainer: {
    height: 40,
    width: 90,
    // backgroundColor: "#f4511e",
    borderWidth: 1,
    borderColor: "#f4511e",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  buttonText: {
    color: "#f4511e",
    fontSize: 15,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  footer: {
    borderTopColor: "grey",
    borderTopWidth: 1,
  },
  scanContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  qrContainer: {
    alignSelf: "center",
  },
  topic: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  contact: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  share: {
    fontSize: 16,
    fontWeight: "100",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 16,
    fontWeight: "100",
  },
  scanText: {},
});
