import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({ navigation }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground style={styles.profile} source={{uri:image}}>
          <TouchableOpacity
            onPress={pickImage}
            style={styles.buttonContainerProfile}
          >
            <View style={styles.icon}>
              <AntDesign name="user" size={50} color="#f4511e" />
            </View>

            <Text style={styles.buttonTextProfile}>ADD PROFILE PHOTO</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.formContainer}>
          <View style={styles.label}>
            <Text>Full Name</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="Abraham Lincoln"
              />
            </View>
          </View>

          <View style={styles.label}>
            <Text>Email</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="lacey.filson@gmail.com"
              />
            </View>
          </View>
          <View style={styles.label}>
            <Text>Phone Number</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="+233(244) 889 375"
              />
            </View>
          </View>

          <View style={styles.label}>
            <Text>Role</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="Software Developer"
              />
            </View>
          </View>

          <View style={styles.label}>
            <Text>Twitter</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="@abrahamlincoln"
              />
            </View>
          </View>

          <View style={styles.label}>
            <Text>LinkedIn</Text>
            <View style={styles.input}>
              <TextInput
                placeholderTextColor="#aaaaaa"
                placeholder="/abrahamlincoln"
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    marginVertical: 40,
    fontSize: 30,
  },
  label: {
    flexDirection: "row",
    marginVertical: 20,
    borderBottomColor: "#c1c8d4",
    borderBottomWidth: 1,
    marginHorizontal: 15,
    justifyContent: "space-between",
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
  buttonContainerProfile: {
    alignSelf: "center",
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 80,
  },
  buttonTextProfile: {
    color: "#f4511e",
    fontSize: 15,
  },
  icon: {
    marginBottom: 10,
  },
  profile: {
    // backgroundColor: "green",
    paddingVertical: 25,
  }
});
