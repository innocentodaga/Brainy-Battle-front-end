import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import CustomCard from '../../components/CustomCard';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import axios from 'axios';
import API from '../../components/API';
import COLORS from '../../components/Colors';

const SSTScreen = () => {
  const navigation = useNavigation();
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const animationValue = useState(new Animated.Value(0))[0];

  const route = useRoute();
  const class_id = route.params.class_id;
  const subject_id = route.params.id;

  const fetchTopics = async () => {
    try {
      const response = await axios.get(API.get_topics, {
        params: { subject_id: subject_id, class_id: class_id },
      });
      const topicsData = await response.data;
      setTopics(topicsData);
      console.log(topicsData);
    } catch (err) {
      console.error("Error fetching topics:", err);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleSubtopicPress = (subtopic) => {
    setSelectedTopic(subtopic);
    setModalVisible(true);
    animateModal();
  };

  const animateModal = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleWatchTutorial = () => {
    navigation.navigate("TutorialScreen", {
      class_id: class_id,
      subject_id: subject_id,
      topic_id: selectedTopic.id,
    });
    setModalVisible(false);
  };

  const handleAttemptQuiz = () => {
    navigation.navigate("QuestionScreen", {
      class_id: class_id,
      subject_id: subject_id,
      topic_id: selectedTopic.id,
    });
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSubtopicPress(item)}>
      <CustomCard
        imageSource={require('../../../assets/math.png')}
        heading={item.topic}
        description={"Description"}
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
        Choose from the list
      </Text>
      <View style={{backgroundColor:"#d3d3d3d3", height: 1, marginTop: 8}}></View>     
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={topics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      {/* Modal for subtopic options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Animated.View
          style={[
            styles.centeredView,
            {
              transform: [
                {
                  scale: animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
            { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          ]}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={handleWatchTutorial}
            >
              <Text style={styles.optionText}>Watch Tutorial</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={handleAttemptQuiz}
            >
              <Text style={styles.optionText}>Attempt Quiz</Text>
            </TouchableOpacity>

            {/* Structured Questions */}
            <TouchableOpacity
              style={styles.optionButton}
              // onPress={()=>{navigation.navigate("PdfScreen")}}
            >
              <Text style={styles.optionText}>Structured Question</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: COLORS.light,
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  optionButton: {
    backgroundColor: COLORS.lightBLUE,
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    elevation: 3,
  },
  optionText: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: "bold",
  },
});

export default SSTScreen;