import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const BrainyButton = ({ text, faceColor, sidecolor, fontSize, textColor, someWidth, ...props }) => {
    const [pressedButton, setPressedButton] = useState(null);

    const handleButtonPressIn = (buttonName) => {
      setPressedButton(buttonName);
    };
  
    const handleButtonPressOut = () => {
      setPressedButton(null);
    };
  
    const isPressed = (buttonName) => {
      return buttonName === pressedButton;
    };
    return (
        <View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            isPressed("info") && styles.buttonPressed,
            { backgroundColor: faceColor, borderColor: sidecolor }, {width: someWidth}
          ]}
          onPressIn={() => handleButtonPressIn("info")}
          onPressOut={handleButtonPressOut}
          {...props}
        >
          <Text style={{fontSize: fontSize, color: textColor}}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
      justifyContent: "center",
      marginVertical: 5,
      alignItems: "center",
      width: 250,
      height: 60,
      borderRadius: 20,
      borderWidth: 0.2,
      borderColor: "#ff7cd5",
      borderBottomWidth: 8,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
      shadowColor: "#1c5da6",
    },
    buttonPressed: {
      transform: [{ translateY: 2 }],
      shadowOffset: { width: 0, height: 0 },
      borderBottomWidth: 0,
    },
  });

export default BrainyButton;

