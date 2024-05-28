import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Make sure to install '@expo/vector-icons'

const SideBarCard = () => {
  return (
    <View style={styles.sideBarCard}>
      <MaterialCommunityIcons name="help-circle" style={styles.icon} />
      <View style={styles.cardContent}>
        <View style={[styles.circle, styles.circle1]}></View>
        <View style={[styles.circle, styles.circle2]}></View>
        <Text style={styles.heading}>Help Center</Text>
        <Text style={styles.description}>Having trouble with Brainy Battle, please contact us for more questions</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sideBarCard: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
    
  },
  icon: {
    position: 'absolute',
    backgroundColor: '#f0f',
    borderWidth: 10,
    borderColor: '#fff',
    borderRadius: 50,
    top: -10,
    fontSize: 38,
    zIndex:1100,
    right: '45%',
  },
  cardContent: {
    position: 'relative',
    padding: 16,
    backgroundColor: '#ffdbdf',
    borderRadius: 10,
    overflow: 'hidden',
    width:'100%',
  },
  circle: {
    position: 'absolute',
    borderRadius: 50,
    opacity: 0.7,
  },
  circle1: {
    height: 100,
    width: 100,
    backgroundColor: '#aed581',
    top: -50,
    left: -50,
  },
  circle2: {
    height: 150,
    width: 150,
    backgroundColor: '#aed581',
    bottom: -80,
    right: -70,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 10,
    paddingVertical: 16,
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#333',
    paddingBottom: 16,
    fontWeight: '500',
  },
  button: {
    position: 'relative',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SideBarCard;
