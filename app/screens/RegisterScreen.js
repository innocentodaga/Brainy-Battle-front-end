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

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView style={{width: '100%'}}>
        <View style={styles.container}>
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
                label="Email"
                iconName="account-outline"
                placeholder="Enter your email"
            />
            <Input
                label="Password"
                iconName="account-outline"
                placeholder="Enter your password"
                password
            />
            <Input
                label="Confirm Password"
                iconName="account-outline"
                placeholder="Confirm your Password"
                password
            />
            <View
                style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 5,
                marginBottom: 10,
                alignSelf: 'center'
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{ color: "blue" }}>Already Have Account?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: "center" }}>
                <BrainyButton
                text="Register"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    marginBottom: 30,

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

export default RegisterScreen;
