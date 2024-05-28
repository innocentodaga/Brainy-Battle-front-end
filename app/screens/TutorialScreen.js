import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import Slider from "@react-native-community/slider"; // Import Slider from @react-native-community/slider
import axios from "axios";
import API from "../components/API";
import { useRoute } from "@react-navigation/native";

const TutorialScreen = ({ navigation }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const [tutorialUrl, setTutorialUrl] = useState("");
  const [videoPosition, setVideoPosition] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const route = useRoute();
  // const topic_id = route.params.topic_id;
  // const subject_id = route.params.subject_id;
  // const class_id = route.params.class_id;

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await axios.get(API.get_videos, {
        params: {
          // subject_id: subject_id,
          // class_id: class_id,
          // topic_id: topic_id,
        },
      });
      const data = await response.data;
      setTutorialUrl(API.video_concat + data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      // Video playback finished
      Alert.alert(
        "Video Finished",
        "The video has finished playing.",
        [
          {
            text: "OK",
            onPress: () =>
              navigation.navigate("S", {
                level_id: level_id,
                subject_id: subject_id,
              }),
          },
        ],
        { cancelable: false }
      );
    } else {
      setVideoPosition(status.positionMillis / videoDuration);
    }
  };

  const handleSliderChange = (value) => {
    if (videoRef.current) {
      setVideoPosition(value);
      videoRef.current.setPositionAsync(value * videoDuration);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: tutorialUrl }}
        style={styles.video}
        resizeMode="contain"
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        onReadyForDisplay={({ naturalSize }) => {
          setVideoDuration(naturalSize.durationMillis);
        }}
      />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={videoPosition}
        onValueChange={handleSliderChange}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#000"
        step={0.01} // Set a step value to ensure smooth movement
      />
      <TouchableOpacity
        onPress={handlePlayPause}
        style={styles.playPauseButton}
      >
        <Text style={styles.buttonText}>
          {isVideoPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Set background color to black
  },
  video: {
    flex: 1,
    width: Dimensions.get("window").width, // Make the video take the entire screen width
  },
  slider: {
    width: "80%",
    marginTop: 20,
  },
  playPauseButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TutorialScreen;
