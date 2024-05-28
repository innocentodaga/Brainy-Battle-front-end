import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { DraggableGrid } from "react-native-draggable-grid";

const VideoScreen = () => {
  const [data, setData] = useState([
    { name: "1", key: "one", color: "black"},
    { name: "2", key: "two", color: "yellow"},
    { name: "3", key: "three", color: "red" },
    { name: "4", key: "four", color: "black" },
    { name: "5", key: "five", color: "yellow" },
    { name: "6", key: "six", color: "red" },
    { name: "7", key: "seven", color: "black" },
    { name: "8", key: "eight", color: "yellow" },
    { name: "9", key: "night", color: "red" },
    { name: "10", key: "ten", color: "black" },
    { name: "11", key: "eleven", color: "yellow" },
  ]);

  const render_item = (item) => {
    return (
      <View style={[styles.item, {backgroundColor: item.color}]} key={item.key}>
        <Text style={styles.item_text}>{item.name}</Text>
      </View>
    );
  };

  const onDragRelease = (updatedData) => {
    setData(updatedData);
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Re-arrange this numbers 1 to 10</Text>
      </View>
      <View style={styles.wrapper}>
        <DraggableGrid
          numColumns={4}
          renderItem={render_item}
          data={data}
          onDragRelease={onDragRelease}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 100,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  item: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  item_text: {
    fontSize: 40,
    color: "#FFFFFF",
  },
});

export default VideoScreen;
