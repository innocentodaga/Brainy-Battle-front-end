import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./app/screens/OnboardingScreen";
import GetStartedScreen from "./app/screens/GetStartedScreen";
import LoginScreen from "./app/screens/LoginScreen";
import Dashboard from "./app/screens/Dashboard";
import SubjectDetails from "./app/screens/SubjectDetails";
import Quiz from "./app/screens/Quiz";
import VideoScreen from "./app/screens/VideoScreen";
import S from "./app/S";
import Lot from "./app/Lot";
import ForgotPassword from "./app/screens/ForgotPassword";
import RegisterScreen from "./app/screens/RegisterScreen";
import PrimaryOneDashboard from "./app/screens/PrimaryOne/PrinaryOneDashboard"
import PrimaryTwoDashboard from "./app/screens/PrimaryTwo/PrimaryTwoDashboard"
import PrimaryThreeDashboard from "./app/screens/PrimaryThree/PrimaryThreeDashboard"
import SideBarCard from './app/screens/SideBarCard'


import SSTScreen from "./app/screens/PrimaryOne/SSTScreen"
import MathScreen from "./app/screens/PrimaryOne/MathScreen"
import ScienceScreen from "./app/screens/PrimaryOne/ScienceScreen"
import EnglishScreen from "./app/screens/PrimaryOne/EnglishScreen"

import Slider from "./app/components/Slider";
import DashboardScreen from "./app/Dashboard";

import SetOneScreen from './app/screens/PrimaryOne/SetOneScreen'

import MomoHeader from './app/screens/MomoHeader/MomoHeader'
import Profile from './app/screens/ProfileScreen'

import Header from './app/screens/Header'
// import NameItem from './app/screens/NameItem'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="GetStartedScreen">
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="DashboardScreen" component={Dashboard}/>
        <Stack.Screen name="SubjectDetailsScreen" component={SubjectDetails} options={{headerShown: true, title: "Subject"}}/>
        <Stack.Screen name="QuizScreen" component={Quiz} options={{headerShown: true, title: "Attempt Quiz"}}/>
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{headerShown: true}}/>
        <Stack.Screen name="Quiz" component={Lot}/>
        <Stack.Screen name="S" component={S} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="PrimaryOneDashboard" component={PrimaryOneDashboard} options={{headerShown:true, title:"Primary One"}}/>
        <Stack.Screen name="PrimaryTwoDashboard" component={PrimaryTwoDashboard} options={{headerShown:true, title:"Primary Two"}}/>
        <Stack.Screen name="PrimaryThreeDashboard" component={PrimaryThreeDashboard} options={{headerShown:true, title:"Primary Three"}}/>
        <Stack.Screen name="SideBarCard" component={SideBarCard}/>

        <Stack.Screen name="SSTScreen" component={SSTScreen} options={{headerShown:true, title:"SST"}}/>
        <Stack.Screen name="MathScreen" component={MathScreen} options={{headerShown:true, title:"Math"}}/>
        <Stack.Screen name="ScienceScreen" component={ScienceScreen} options={{headerShown:true, title:"Science"}}/>
        <Stack.Screen name="EnglishScreen" component={EnglishScreen} options={{headerShown:true, title:"English"}}/>
        <Stack.Screen name="Slider" component={Slider}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>

        <Stack.Screen name="SetOneScreen" component={SetOneScreen} options={{headerShown:true, title:"Set One"}}/>

        <Stack.Screen name = "MomoHeader" component={MomoHeader}/>
        <Stack.Screen name = "Profile" component={Profile}/>

        <Stack.Screen name="Header" component={Header}/>


        {/* <Stack.Screen name = "NameItem" component={NameItem}/> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}
