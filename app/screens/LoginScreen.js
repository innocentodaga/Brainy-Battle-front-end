import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Input from "../components/Input";
import BrainyButton from "../components/BrainyButton";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Text>Hello, this is login screen</Text> */}
        <View style={{ marginLeft: 30 }}>
          <Text style={styles.textStyle}>Develop</Text>
          <Text style={styles.textStyle}>the future</Text>
          <Text style={styles.textStyle}>brain</Text>
        </View>
        <View style={{ alignSelf: "center", margin: 10 }}>
          <Image
            source={require("../../assets/dna.png")}
            style={styles.middleImage}
          />
        </View>
        <View
          style={{
            padding: 10,
            marginHorizontal: 15,
            backgroundColor: "#EFE9E1",
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Input
            label="Username"
            iconName="account-outline"
            placeholder="Enter your username"
          />
          <Input
            label="Password"
            iconName="account-outline"
            placeholder="Enter your password"
            password
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 5,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={{ color: "blue" }}>Forgot Details ?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={{ color: "blue" }}>Create account ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <BrainyButton
              text="Login"
              faceColor="#E1B471"
              sidecolor="#402903"
              fontSize={20}
              textColor="#fff"
              onLongPress={() => alert("Onlong press")}
              onPress={() => navigation.navigate("DashboardScreen")}
              someWidth={250}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  middleImage: {
    width: 250,
    height: 250,
  },
  textStyle: {
    fontSize: 17,
    alignSelf: 'flex-start',
  },
});

export default LoginScreen;
