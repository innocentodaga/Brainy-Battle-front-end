import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from './Colors'

const CustomCard = ({ imageSource, heading, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: "#000",
    borderLeftWidth: 5,
    borderColor: COLORS.PINK,
    borderRadius: 8,
    marginBottom:8,
    padding: 10,
    backgroundColor: COLORS.LIGHTERPINK
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default CustomCard;
