import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';


export default function VideoCard() {
  const {width, height} = Dimensions.get('screen');
  return(
    <View style={styles.mainPlayerView}>
      <View style={{height: height/3, backgroundColor: 'gray', width: '100%'}}>
      </View>
      <Text style={{fontSize: 24, fontWeight:"800", color: 'black'}}>Video Title</Text>
      <Text style={{fontSize: 18, fontWeight:"400", color: 'black'}}>Video Description</Text>

    </View>
  );

}

const styles = StyleSheet.create({
  mainPlayerView: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
