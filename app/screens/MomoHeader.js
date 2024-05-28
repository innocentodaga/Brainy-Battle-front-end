// import React, { useRef } from "react";
// import { SafeAreaView, View, StyleSheet, StatusBar, Text, Image } from "react-native";
// import { ScrollView, TextInput, } from "react-native-gesture-handler";
// import { WINDOW_HEIGHT } from "./Index";
// import { SimpleLineIcons } from '@expo/vector-icons';
// import Animated, { Extrapolate } from "react-native-reanimated";
// import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

// const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// export default function MomoHeader(){

//     const animatedValue = useRef(new Animated.Value(0)).current;

//     const searchInputAnimation = {
//         transform:[
//             {
//                 scaleX: animatedValue.interpolate({
//                     inputRange: [0, 50],
//                     outputRange:[1, 0],
//                     Extrapolate: 'clamp'
//                 })
//             },
//             {
//                 translateX: animatedValue.interpolate({
//                     inputRange: [0, 25],
//                     outputRange:[0, -100],
//                     Extrapolate: 'clamp'
//                 })
//             },
//         ],
        
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 50],
//             outputRange:[1, 0],
//             Extrapolate: 'clamp'
//         })
//     };

//     const featureNameAnimation = {
//         transform:[
//             {
//                 scaleX: animatedValue.interpolate({
//                     inputRange: [0, 30],
//                     outputRange:[1, 0],
//                     Extrapolate: 'clamp'
//                 })
//             },
//         ],
        
//         opacity: animatedValue.interpolate({
//             inputRange: [0, 30],
//             outputRange:[1, 0],
//             Extrapolate: 'clamp'
//         })
//     };
//     return(
//         <View style = {styles.container}>
//             <StatusBar barStyle="light-content"/>
//             <SafeAreaView>
//                 <View style={styles.upperHeaderPlaceHolder}/>
//             </SafeAreaView>

//             <SafeAreaView style = {styles.header}>
//                 <View style={styles.upperheader}>
//                     <View style={styles.searchCotainer}>
//                         <SimpleLineIcons name='badge' style={styles.searchIcon} color="#460066" />
//                         <AnimatedTextInput
//                             placeholder="Search"
//                             placeholderTextColor="gray"
//                             style={[styles.searchInput, searchInputAnimation]}
//                         />
//                     </View>
    
//                     <SimpleLineIcons name="bell" style={styles.bellIcon} color="#460066" />
//                     <Image 
//                         style={styles.avatar}
//                         source={require("../assets/tyson-.png")}
//                     />
//                 </View>
//                 <View style={styles.lowerheader}>
//                     <View style = {styles.feature}>
//                         <Image 
//                             style={styles.avatar}
//                             source={require("../assets/icon.png")}
//                         />
//                         <Animated.Text style = {[styles.featureName, featureNameAnimation]}>Home</Animated.Text>   
//                     </View>

//                     <View style = {styles.feature}>
//                         <Image 
//                             style={styles.avatar}
//                             source={require("../assets/favicon.png")}
//                         />
//                         <Animated.Text style = {[styles.featureName, featureNameAnimation]}>
//                             Scores
//                         </Animated.Text>    
//                     </View>
                
//                     <View style = {styles.feature}>
//                         <Image 
//                             style={styles.avatar}
//                             source={require("../assets/goog.png")}
//                         />
//                         <Animated.Text style = {[styles.featureName, featureNameAnimation]}>
//                             Subjects
//                         </Animated.Text>  
//                     </View>
                    
//                     <View style = {styles.feature}>
//                         <Image 
//                             style={styles.avatar}
//                             source={require("../assets/google.jpg")}
//                         />
//                         <Animated.Text style = {[styles.featureName, featureNameAnimation]}>
//                             About
//                         </Animated.Text>    
//                     </View>
//                 </View>
//             </SafeAreaView>

//             <ScrollView onScroll={e => {
//                 const offsetY = e.nativeEvent.contentOffset.y;
//                 animatedValue.setValue(offsetY);
//             }}>
//                 <View style={styles.paddingHeader}/>
//                 <View style={styles.scrollViewContent}/>
//             </ScrollView>
//         </View>
//     );
// }

// const UPPER_HEADER_HEIGHT = 60;
// const LOWER_HEADER_HEIGHT = 96;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//     },
//     header:{
//         position: 'absolute',
//         width: '100%',
//         backgroundColor: "#af0c6e",
//     },
//     upperheader:{
//         height: UPPER_HEADER_HEIGHT,
//         marginTop:4,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal:16
//     },
//     searchCotainer:{
//         flex: 1,
//         justifyContent:'center'
//     },
//     searchIcon:{
//         width: 16,
//         height: 16,
//         marginLeft: 8
//     },
//     searchInput:{
//         position: 'absolute',
//         width: '100%',
//         backgroundColor: 'rgba(255, 255, 255, 0.3)',
//         color: 'white',
//         borderRadius: 4,
//         paddingVertical: 4,
//         paddingLeft: 32

//     },
//     bellIcon:{
//         width: 16,
//         height: 16,
//         marginHorizontal: 32
//     },
//     avatar:{
//         width: 28,
//         height:28
//     },
//     lowerheader:{
//         height: LOWER_HEADER_HEIGHT,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width:'100%',
//         paddingHorizontal: 16
//     },
//     feature:{
//         alignItems: 'center',
//     },
//     featureName:{
//         fontWeight: 'bold',
//         fontSize: 12, 
//         lineHeight: 14,
//         color: 'white',
//         marginTop: 12
//     },

//     upperHeaderPlaceHolder:{
//         height: UPPER_HEADER_HEIGHT,
//     },
//     scrollViewContent:{
//         height: WINDOW_HEIGHT * 2,
//         backgroundColor: 'white',
//     },
//      paddingHeader:{
//         height: LOWER_HEADER_HEIGHT,
//      }

// });