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

const ForgotPassword = ({ navigation }) => {
  return (
      <View style={styles.container}>
        {/* <Text>Hello, this is login screen</Text> */}
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
            width:'95%',
            marginBottom: 20,
          }}
        >
          <Input
            label="Email"
            iconName="account-outline"
            placeholder="Enter your Email"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 5,
              marginBottom: 10,
              alignSelf: 'center',
            }}
          >
            <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
              <Text style={{ color: "blue"}}>Already Have Account?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <BrainyButton
              text="Get OTP"
              faceColor="#E1B471"
              sidecolor="#402903"
              fontSize={20}
              textColor="#fff"
              onLongPress={() => alert("Onlong press")}
              onPress={() => navigation.navigate("LoginScreen")}
              someWidth={250}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  middleImage: {
    width: 200,
    height: 200,
  },
  textStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: ''
  },
});

export default ForgotPassword;
