import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import WelcomeScreen from '../../app/screens/WelcomeScreen.js';
import HomeScreen from '../../app/screens/HomeScreen.js';
import ChatScreen from  '../../app/screens/ChatScreen.js';
import ProfileScreen from '../../app/screens/ProfileScreen.js';
import ChatDetailsScreen from '../../app/screens/ChatDetailsScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppNavigation() {
  const {colorScheme} = useColorScheme();
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused }) => {
            let iconName;
            if(route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if(route.name === "Matchees") {
              iconName = "heart-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "#3B82F6" : "gray"} />
            )
          },
          tabBarActiveTintColor: "#3B82F6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
          },
        })} >
            <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name='Chat' component={ChatScreen} options={{headerShown:false}}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetailsScreen}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}