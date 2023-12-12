import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import FavoriteScreen from "../Screens/FavoriteScreen/FavoriteScreen";
import ProfileScreen from "../Screens/ProfileScreen.js/ProfileScree";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
            headerShown: false,
            tabBarLabel: "Favorite",
            tabBarActiveTintColor:Colors.PRIMARY,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-heart" size={size} color={color} />
            ),
          }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
