import React, { useState } from 'react';
import { 
  View, 
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import COLORS from '../components/Colors';
import ClassCard from "../components/ClassCard";
import SideBarCard from "./SideBarCard";
import Slider from "../components/Slider";


const UPPER_HEADER_HEIGHT = 40;
const UPPER_HEADER_PADDING_TOP = 4;
const LOWER_HEADER_HEIGHT = 96;

const Dashboard = ({ navigation }) => {
  
  const [classes, setSubjects] = useState([
    {
      key: "1",
      class: "Primary One",
      pic: require("../../assets/p1.png"),
    },
    {
      key: "2",
      class: "Primary Two",
      pic: require("../../assets/p2.png"),
    },
    {
      key: "3",
      class: "Primary Three",
      pic: require("../../assets/p33.jpg"),
    },
  ]);

  const clascard = ({ item }) => (
    <ClassCard
      item={item}
      onPress={() => {
        switch (item.class) {
          case "Primary One":
            navigation.navigate("PrimaryOneDashboard", { id: item.key });
            break;
          case "Primary Two":
            navigation.navigate("PrimaryTwoDashboard", { id: item.key });
            break;
          case "Primary Three":
            navigation.navigate("PrimaryThreeDashboard", { id: item.key });
            break;
          default:
            break;
        }
      }}
    />
  );

  return (
    <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView>
            <View style={styles.upperHeaderPlaceholder} />
        </SafeAreaView>
        <SafeAreaView style={styles.header}>
            <View style={styles.upperHeader}>
            <View style={styles.searchContainer}>
                <Image
                source={require('../../assets/search-icon-png-9969.png')}
                style={[styles.icon16, { marginLeft: 8 }]}
                />
                <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor="rgba(255, 255, 255, 0.8)"
                style={styles.searchInput}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                source={require('../../assets/profile.png')}
                style={styles.avatar}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.lowerHeader}>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/calculator.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Enjoy
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/calculator.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Learn
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/greetings.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Play
                </Text>
            </View>
            <View style={styles.feature}>
                <Image
                source={require('../../assets/search-icon-png-9969.png')}
                style={styles.icon32}
                />
                <Text style={styles.featureName}>
                Have Fun
                </Text>
            </View>
            </View>
        </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.spaceForHeader} />
      <View style={{ marginHorizontal: 10 }}>
        <Image
          source={require("../../assets/images/unnamed.png")}
          style={{ height: 180, width: "100%", borderRadius: 8, marginTop: 10 }}
        />
        <Text style={{
          position: 'absolute',
          fontWeight: '800',
          margin: 20,
          fontSize: 24,
          color: 'white'
        }}>
          Welcome
        </Text>
        </View>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Choose Your Class</Text>
        </View>
        <View style={styles.divider}></View>
        <FlatList
          data={classes}
          numColumns={2}
          keyExtractor={(item) => item.key}
          renderItem={clascard}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Daily Scores</Text>
        </View>
        <View style={styles.divider}></View>
        <Slider />
        <SideBarCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  divider: {
    height: 2,
    marginTop: 5,
    backgroundColor: COLORS.lightBLUE,
  },
  searchContainer: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    height: 40,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  searchIcon: {
    marginHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    color: COLORS.darkBlue,
  },
  sliderContainer: {
    height: 190,
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    position: 'absolute',
    margin: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  sectionTitle: {
    marginTop: 8,
  },
  sectionTitleText: {
    fontWeight: '600',
  },
  dailyScores: {
    height: 250,
    marginTop: 10,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  icon32: {
    width: 32,
    height: 32,
  },
  upperHeaderPlaceholder: {
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: UPPER_HEADER_PADDING_TOP,
  },
  header: {
    position: 'absolute',
    width: '100%',
    backgroundColor: COLORS.PINK,
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: UPPER_HEADER_HEIGHT + UPPER_HEADER_PADDING_TOP,
    paddingTop: 10,
    
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  avatar: {
    width: 28,
    height: 28,
    marginLeft: 10,
  },
  lowerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: LOWER_HEADER_HEIGHT,
    paddingHorizontal: 16,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  feature: {
    alignItems: 'center',
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 12,
  },
  spaceForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    height: 1000,
    backgroundColor: 'white',
  },
});

export default Dashboard;
