import React, { useState } from 'react';
import {
  View, Image, StyleSheet, SafeAreaView, ScrollView, Dimensions, Text
} from 'react-native';

const ImageSlider = ({ images }) => {
  const { width } = Dimensions.get('window');
  const height = 200;
  const [active, setActive] = useState(0);
  
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ width, height, resizeMode: 'cover' }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k === active ? styles.activeDot : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: 120,
    width: '100%',
    borderRadius: 10
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10, 
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 10, 
    margin: 3, 
  },
  activeDot: {
    color: '#FFF',
    fontSize: 12, 
    margin: 3, 
  },
});

export default ImageSlider;
