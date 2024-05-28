import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import BrainyButton from "../components/BrainyButton";

const GetStartedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
        <Text style={{ alignSelf: "center" }}>Easy Learn</Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../../assets/dna.png")}
          style={styles.middleImage}
        />
      </View>
      <View style={{marginTop: 40}}>
        <BrainyButton
          text="Get Started"
          faceColor="#E1B471"
          sidecolor="#402903"
          fontSize={20}
          textColor="#fff"
          onLongPress={() => alert("Onlong press")}
          onPress={() => navigation.navigate("SSTScreen")}
          someWidth={200}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 130,
    height: 130,
  },
  middleImage: {
    width: 300,
    height: 300,
  },
});

export default GetStartedScreen;
