import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native"; // Import Dimensions
import FancyCard from "../../components/FancyCard"; // Import FancyCard component

const PrimaryThreeDashboard = ({ navigation }) => {
  const [subjects, setSubjects] = useState([
    {
      key: "1",
      sbj: "Math",
      pic: require("../../../assets/math.png"),
    },
    {
      key: "2",
      sbj: "Science",
      pic: require("../../../assets/dna.png"),
    },
    {
      key: "3",
      sbj: "English",
      pic: require("../../../assets/eng.png"),
    },
    {
      key: "4",
      sbj: "SST",
      pic: require("../../../assets/sst.png"),
    },
  ]);

  const sbjCard = ({ item }) => (
    <FancyCard
      subjectname={item.sbj}
      image={item.pic}
      submit={() => {
        // Navigate to different screens based on the clicked class
        switch (item.sbj) {
          case "Math":
            navigation.navigate("MathScreen", { id: item.key });
            break;
          case "Science":
            navigation.navigate("ScienceScreen", { id: item.key });
            break;
          case "English":
            navigation.navigate("EnglishScreen", { id: item.key });
            break;
          case "SST":
            navigation.navigate("SSTScreen", { id: item.key });
            break;
          default:
            break;
        }
      }}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor:'#efbbff' }}>      
      {/* Main content view */}
      <View style={{ flex: 1, marginHorizontal: 10}}>
        <Text style={{ fontSize: 20, marginBottom: 5 }}>
          Let's Learn
        </Text>
        <FlatList
          data={subjects}
          numColumns={2}
          keyExtractor={(item) => item.key}
          renderItem={sbjCard}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  greetings: {
    width: 40,
    height: 40,
  },
  flatListContentContainer: {
    paddingBottom: 10,
    alignItems: 'center'
  },
});

export default PrimaryThreeDashboard;
