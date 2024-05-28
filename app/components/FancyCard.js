import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'; // Import Image component
import COLORS from './Colors';

const FancyCard = ({ subjectname, image, submit }) => {
  const windowWidth = Dimensions.get('window').width; // Get the window width

  return (
    <View style={[styles.sideBarCard, { width: windowWidth * 0.5 }]}> 
      <View style={styles.cardContent}>
      <Image source={image} style={styles.icon} />
        <Text style={styles.heading}>{subjectname}</Text>
          <TouchableOpacity onPress={submit} style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideBarCard: {
    padding: 16,
    alignItems: 'center',
  },
  // Change icon style to accommodate the square image
  icon: {
    width: "100%",
    height: 80,
    alignSelf:'center'
  },
  cardContent: {
    padding: 16,
    backgroundColor: '#ffdbdf',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 5,
    height: 180,
    width: '100%',
    borderLeftColor: '#ff38cd',
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: COLORS.LIGHTPINK,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 8,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FancyCard;
