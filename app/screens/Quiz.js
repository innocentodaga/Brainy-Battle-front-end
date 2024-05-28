// import React, { useState } from "react";
// import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
// import COLORS from "../components/Colors";
// import BrainyButton from "../components/BrainyButton";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Quiz = () => {
//   const [status, setStatus] = useState(true);
//   const [color, setColor] = useState("#402903");
//   const [clicked, setClicked] = useState(false);
//   const data = [
//     { id: '1', title: 'Kampala' },
//     { id: '2', title: 'Nairobi' },
//     { id: '3', title: 'Kenya' },
//     { id: '4', title: 'Mbale' }
//   ];

//   // This is for rendering questions
//   const renderQuestion = () => (
//     <View style={styles.questionBackground}>
//       <Text
//         style={[
//           styles.question,
//           {
//             opacity: 0.5,
//             fontSize: 18,
//             alignSelf: "flex-start",
//             marginLeft: 10,
//           },
//         ]}
//       >
//         1/1
//       </Text>
//       <Text style={{ fontSize: 25 }}>What is the capital City of Uganda ?</Text>
//     </View>
//   );

//   // When the options is clicked
//   const onClickOptions = () => {
//     setClicked(!clicked);

//     if (status) {
//       setColor("green");
//     } else {
//       setColor("red");
//     }
//   };

//   // For rendering options
//   const renderOptions = ({item}) => (
//     <Pressable
//       style={[styles.renderOptionsStyle, { borderColor: color }]}
//       onPress={onClickOptions}
//     >
//       <Text
//         style={{
//           fontSize: 20,
//           alignSelf: "flex-start",
//           color: color,
//           fontWeight: "bold",
//         }}
//       >
//         {item.title}
//       </Text>

//       {/* View to render icons based on the question status */}
//       <View>
//         {clicked ? (
//           status ? (
//             <Ionicons name="checkmark-circle-outline" size={27} color={color} />
//           ) : (
//             <Ionicons name="close-circle-outline" size={27} color={color} />
//           )
//         ) : null}
//       </View>
//     </Pressable>
//   );

//   const renderButton = () => (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginHorizontal: 20,
//         marginTop: 20,
//       }}
//     >
//       <BrainyButton
//         text="Previous"
//         faceColor="#E1B471"
//         sidecolor="#402903"
//         fontSize={20}
//         textColor="#fff"
//         someWidth={100}
//       />
//       <BrainyButton
//         text="Next"
//         faceColor="#E1B471"
//         sidecolor="#402903"
//         fontSize={20}
//         textColor="#fff"
//         someWidth={100}
//       />
//     </View>
//   );
//   return (
//     <View style={styles.container}>
//       {/* QUESTION HEADER */}
//       <View style={{ marginTop: 30 }}>{renderQuestion()}</View>

//       {/* QUESTION OPTIONS */}
//       <View style={{ marginTop: 30 }}>
//         {/* {renderOptions()}
//         {renderOptions()} */}

//         <FlatList
//         keyExtractor={item=>item.id}
//         data={data}
//         renderItem={renderOptions}
//         />

//       </View>

//       {/* NAVIGATION BUTTONS */}
//       {renderButton()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   questionBackground: {
//     backgroundColor: "#fbdbacc6",
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     paddingVertical: 10,

//     borderWidth: 0.2,
//     borderColor: "#402903",
//     borderBottomWidth: 8,
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//     shadowColor: "#1c5da6",
//   },
//   renderOptionsStyle: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E1B471",
//     padding: 15,
//     marginHorizontal: 10,
//     borderRadius: 10,
//     borderWidth: 3,
//     // borderColor: "#402903",
//     marginVertical: 5,
//     justifyContent: "space-between",
//   },
// });

// export default Quiz;


// import React, { useState } from "react";
// import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
// import COLORS from "../components/Colors";
// import BrainyButton from "../components/BrainyButton";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Quiz = () => {
//   const [clickedOptions, setClickedOptions] = useState({}); // State to track clicked options

//   const data = [
//     { id: '1', title: 'Kampala' },
//     { id: '2', title: 'Nairobi' },
//     { id: '3', title: 'Kenya' },
//     { id: '4', title: 'Mbale' }
//   ];

//   // This is for rendering questions
//   const renderQuestion = () => (
//     <View style={styles.questionBackground}>
//       <Text
//         style={[
//           styles.question,
//           {
//             opacity: 0.5,
//             fontSize: 18,
//             alignSelf: "flex-start",
//             marginLeft: 10,
//           },
//         ]}
//       >
//         1/1
//       </Text>
//       <Text style={{ fontSize: 25 }}>What is the capital City of Uganda ?</Text>
//     </View>
//   );

//   // When an option is clicked
//   const onClickOption = (itemId) => {
//     setClickedOptions({ ...clickedOptions, [itemId]: !clickedOptions[itemId] });
//   };

//   // For rendering options
//   const renderOption = ({ item }) => (
//     <Pressable
//       style={[styles.renderOptionsStyle, { borderColor: clickedOptions[item.id] ? "green" : "red" }]}
//       onPress={() => onClickOption(item.id)}
//     >
//       <Text
//         style={{
//           fontSize: 20,
//           alignSelf: "flex-start",
//           color: clickedOptions[item.id] ? "green" : "red",
//           fontWeight: "bold",
//         }}
//       >
//         {item.title}
//       </Text>
//       {/* View to render icons based on the question status */}
//       {clickedOptions[item.id] && (
//         <Ionicons name="checkmark-circle-outline" size={27} color="green" />
//       )}
//       {!clickedOptions[item.id] && (
//         <Ionicons name="close-circle-outline" size={27} color="red" />
//       )}
//     </Pressable>
//   );

//   const renderButton = () => (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         marginHorizontal: 20,
//         marginTop: 20,
//       }}
//     >
//       <BrainyButton
//         text="Previous"
//         faceColor="#E1B471"
//         sidecolor="#402903"
//         fontSize={20}
//         textColor="#fff"
//         someWidth={100}
//       />
//       <BrainyButton
//         text="Next"
//         faceColor="#E1B471"
//         sidecolor="#402903"
//         fontSize={20}
//         textColor="#fff"
//         someWidth={100}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* QUESTION HEADER */}
//       <View style={{ marginTop: 30 }}>{renderQuestion()}</View>

//       {/* QUESTION OPTIONS */}
//       <View style={{ marginTop: 30 }}>
//         <FlatList
//           keyExtractor={(item) => item.id}
//           data={data}
//           renderItem={renderOption}
//         />
//       </View>

//       {/* NAVIGATION BUTTONS */}
//       {renderButton()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   questionBackground: {
//     backgroundColor: "#fbdbacc6",
//     margin: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     paddingVertical: 10,
//     borderWidth: 0.2,
//     borderColor: "#402903",
//     borderBottomWidth: 8,
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//     shadowColor: "#1c5da6",
//   },
//   renderOptionsStyle: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#E1B471",
//     padding: 15,
//     marginHorizontal: 10,
//     borderRadius: 10,
//     borderWidth: 3,
//     marginVertical: 5,
//     justifyContent: "space-between",
//   },
// });

// export default Quiz;



import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import BrainyButton from "../components/BrainyButton";
import Ionicons from "react-native-vector-icons/Ionicons";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const data = [
    { id: '1', title: 'Kampala', correct: false },
    { id: '2', title: 'Nairobi', correct: false },
    { id: '3', title: 'Kenya', correct: false },
    { id: '4', title: 'Mbale', correct: true }
  ];

  const question = "What is the capital city of Uganda?";

  const renderQuestion = () => (
    <View style={styles.questionBackground}>
      <Text
        style={[
          styles.question,
          {
            opacity: 0.5,
            fontSize: 18,
            alignSelf: "flex-start",
            marginLeft: 10,
          },
        ]}
      >
        1/1
      </Text>
      <Text style={{ fontSize: 25 }}>{question}</Text>
    </View>
  );

  const onClickOption = (item) => {
    if (item.correct) {
      setSelectedOption(item.id);
    } else {
      setSelectedOption(null);
    }
  };

  const renderOption = ({ item }) => (
    <Pressable
      style={[
        styles.renderOptionsStyle,
        { 
          borderColor: selectedOption === item.id ? (item.correct ? "green" : "red") : "#E1B471" 
        }
      ]}
      onPress={() => onClickOption(item)}
      disabled={selectedOption !== null} // Disable pressing options once an option is selected
    >
      <Text
        style={{
          fontSize: 20,
          alignSelf: "flex-start",
          color: selectedOption === item.id ? (item.correct ? "green" : "red") : "#402903",
          fontWeight: "bold",
        }}
      >
        {item.title}
      </Text>
      {/* View to render icons based on the question status */}
      {selectedOption === item.id && (
        <Ionicons 
          name={item.correct ? "checkmark-circle-outline" : "close-circle-outline"} 
          size={27} 
          color={item.correct ? "green" : "red"} 
        />
      )}
    </Pressable>
  );
  

  const renderButton = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20,
      }}
    >
      <BrainyButton
        text="Previous"
        faceColor="#E1B471"
        sidecolor="#402903"
        fontSize={20}
        textColor="#fff"
        someWidth={100}
      />
      <BrainyButton
        text="Next"
        faceColor="#E1B471"
        sidecolor="#402903"
        fontSize={20}
        textColor="#fff"
        someWidth={100}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* QUESTION HEADER */}
      <View style={{ marginTop: 30 }}>{renderQuestion()}</View>

      {/* QUESTION OPTIONS */}
      <View style={{ marginTop: 30 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderOption}
        />
      </View>

      {/* NAVIGATION BUTTONS */}
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionBackground: {
    backgroundColor: "#fbdbacc6",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    borderWidth: 0.2,
    borderColor: "#402903",
    borderBottomWidth: 8,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    shadowColor: "#1c5da6",
  },
  renderOptionsStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E1B471",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 3,
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

export default Quiz;
