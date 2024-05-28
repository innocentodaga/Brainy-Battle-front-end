import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

const ClassCard = ({item, ...props}) => {
  return (
    <Pressable style={{ flex: 1 }} {...props}>
      <View style={styles.classcard}>
        <Image
          source={item.pic}
          style={styles.imageStyles}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    imageStyles: {
      width: "100%",
      height: "100%",
      borderRadius:8
    },
    classcard: {
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      height: 100,
      marginHorizontal: 5,
      elevation: 4,
    },
  });

export default ClassCard;
