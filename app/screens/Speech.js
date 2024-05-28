import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import * as Speech from 'expo-speech'

const Speech = () => {

    const thingsToSay = "Things To Say in uganda is that Simon is Fake";

    const speak = () =>{
        Speech.speak(thingsToSay)
    }
  return (
    <View style = {styles.contanier}>
      <Text style={styles.Text}>{thingsToSay}</Text>
      <Button title='Start Listening' onPress={speak}/>
    </View>
  )
}

const styles = StyleSheet.create({
    contanier:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text:{
        marginTop: 10,
        padding: 10,
        color:'balck'
    }
})


export default Speech