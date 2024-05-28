import React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";

const SubjectCard = ({item, ...props}) => {
  return (
    <Pressable style={{ flex: 1 }} {...props}>
      <View style={styles.subjectCard}>
        <Image
          source={item.pic}
          style={styles.imageStyles}
        />
        <Text>{item.sbj}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    imageStyles: {
      width: 100,
      height: 100,
    },
    subjectCard: {
      backgroundColor: "#fff",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      height: 200,
      marginHorizontal: 5,
      elevation: 4,
    },
  });

export default SubjectCard;
