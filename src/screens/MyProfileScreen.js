import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Zocial, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { logout } from "../redux/actions/authActions";
import { connect } from "react-redux";

const MyProfileScreen = ({ logout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require("../assets/profile.jpg")} style={styles.image} />
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.profileName}>Abraham Lincoln</Text>
          <Text style={styles.profileRole}>Head of Marketing</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <Zocial name="twitter" size={18} color="white" />
        </View>
        <View style={styles.iconContainer}>
          <Zocial name="linkedin" size={18} color="white" />
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Feather name="phone" size={18} color="black" />
        </View>
        <Text style={styles.detail}>+233 (475) 387 889</Text>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <SimpleLineIcons name="envelope" size={18} color="black" />
        </View>
        <Text style={styles.detail}>abrahamlincoln@us.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <SimpleLineIcons name="location-pin" size={18} color="black" />
        </View>
        <Text style={styles.detail}>Takoradi Atlantic Hotel</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 75,
    marginRight: 20,
    alignSelf: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
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
  iconContainer: {
    width: 35,
    height: 35,
    backgroundColor: "gray",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 10,
    marginRight: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  detail: {
    marginLeft: 15,
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
});

export default connect(() => ({}), { logout })(MyProfileScreen);
