import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => {
        navigation.navigate("GetStartedScreen");
      }}
      onSkip={() => {
        navigation.navigate("GetStartedScreen");
      }}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onboardingStyles.imageStyle}
              source={require("../../assets/innovation.png")}
            />
          ),
          title: "Welcome to Brainy Battle",
          subtitle: "Learn, Rebuild, and Excel",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onboardingStyles.imageStyle}
              source={require("../../assets/dna.png")}
            />
          ),
          title: "Discover Your Child's Brain Power",
          subtitle: "Efficient Solutions and fun games",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              style={onboardingStyles.imageStyle}
              source={require("../../assets/atom.png")}
            />
          ),
          title: "Introducing Interactive Quizzes",
          subtitle: "Enhance Efficiency and Productivity",
        },
      ]}
    />
  );
};

const onboardingStyles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 250
    }
})

export default OnboardingScreen;
