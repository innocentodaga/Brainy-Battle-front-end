import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import CustomCard from '../../components/CustomCard';
import { useNavigation } from '@react-navigation/native'; 

const ScienceScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Define data for each card
  const data = [
    {
      id: '1',
      imageSource: require('../../../assets/math.png'),
      heading: 'Topic One',
      description: 'This is a description for Set One.',
      screenName: 'SetOneScreen' // Specify screen name for navigation
    },
    {
      id: '2',
      imageSource: require('../../../assets/math.png'),
      heading: 'Topic Two',
      description: 'This is a description for Set Two.',
      screenName: 'SetOneScreen' // Specify screen name for navigation
    },
    {
      id: '3',
      imageSource: require('../../../assets/math.png'),
      heading: 'Topic Three',
      description: 'This is a description for Set Three.',
      screenName: 'SetOneScreen' // Specify screen name for navigation
    },
    {
      id: '4',
      imageSource: require('../../../assets/math.png'),
      heading: 'Topic Four',
      description: 'This is a description for Set Four.',
      screenName: 'SetOneScreen' // Specify screen name for navigation
    },
  ];

  // Render item function for FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screenName)}>
      <CustomCard
        imageSource={item.imageSource}
        heading={item.heading}
        description={item.description}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.leaderboardContainer}>
        <View style={styles.leaderboardItem}>
          <Image
            source={require("../../../assets/trophy.png")}
            style={styles.greetings}
          />
          <View>
            <Text style={{ fontSize: 20 }}>Ranking</Text>
            <Text style={{ alignSelf: "center", fontSize: 23 }}>09</Text>
          </View>
        </View>
        <View style={styles.leaderboardItem}>
          <Image
            source={require("../../../assets/medal.png")}
            style={styles.greetings}
          />
          <View>
            <Text style={{ fontSize: 20 }}>Point</Text>
            <Text style={{ alignSelf: "center", fontSize: 23 }}>426</Text>
          </View>
        </View>
      </View> 
      <Text style={{ marginTop: 8, fontWeight: '600'}}>
        Chose from the list
      </Text>
      <View style={{backgroundColor:"#d3d3d3d3", height: 1, marginTop: 8}}></View>     
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  leaderboardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  leaderboardItem: {
    flexDirection: "row",
    gap: 5,
  },
  greetingContent: {
    flexDirection: "row",
    gap: 5,
  },
  greetings: {
    width: 40,
    height: 40,
  },
  greetingText: {
    fontWeight: '800',
  },
});

export default ScienceScreen;
