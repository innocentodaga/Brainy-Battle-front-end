import { View, Text, Dimensions, Image } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import COLORS from '../components/Colors'

const Slider = () => {

  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isManualScrolling) {
        if (activeIndex === SliderData.length - 1) {
          flatlistRef.current.scrollToIndex({
            index: 0,
            animated: true
          });
        } else {
          flatlistRef.current.scrollToIndex({
            index: activeIndex + 1,
            animated: true
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  const screenWidth = Dimensions.get("window").width;

  const SliderData = [
    {
      id: "1",
      image: require("../../assets/images/3 - 4.jpg"),
    },
    {
      id: "2",
      image: require("../../assets/images/mn.jpg"),
    },
    
  {
    id: "3",
    image: require("../../assets/images/oi.png"),
    
  },
  {
    id: "4",
    image: require("../../assets/images/unnamed.png"),
    
  },
  {
    id: "5",
    image: require("../../assets/images/mn.jpg"),
    
  },
  {
    id: "6",
    image: require("../../assets/images/yty.png"),
    
  },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }} />
      </View>
    );
  };

  const handleScrollBegin = () => {
    setIsManualScrolling(true);
  };

  const handleScrollEnd = () => {
    setIsManualScrolling(false);
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return SliderData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.LIGHT_GREEN,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}></View>
        )
      }
      else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: COLORS.darkBlue,
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}>
          </View>
        );
      }
    });
  };

  return (
    <View style={{ marginBottom: 20, marginVertical: 10 }}>
      <FlatList
        ref={flatlistRef}
        data={SliderData}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}
        onScroll={handleScroll}
        getItemLayout={(data, index) => (
          { length: screenWidth, offset: screenWidth * index, index }
        )}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -20 }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Slider
