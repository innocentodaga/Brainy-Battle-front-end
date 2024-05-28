import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

function Lot(props) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Lottie.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  lottie: {
    flex: 1,
  },
});

export default Lot;
