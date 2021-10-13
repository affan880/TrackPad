import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CovidStatistics from "../Screens/CovidStatistics";
import Home from "../Screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DetailedCases from "../Screens/DetailedCases";
const TrackPadNavigater = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

const TrackPadStackNav = () => {
  return (
    <TrackPadNavigater.Navigator>
      <TrackPadNavigater.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <TrackPadNavigater.Screen name="Details" component={DetailedCases} />
    </TrackPadNavigater.Navigator>
  );
};
const TrackPadTabNav = () => {
  return (
    <BottomTabNav.Navigator
      tabBarOptions={{
        showLabel: false,
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <BottomTabNav.Screen
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="coronavirus" size={24} color="#329F6D" />
          ),
        }}
        name="Home"
        component={TrackPadStackNav}
      />
      <BottomTabNav.Screen
        options={{
          tabBarIcon: () => (
            <Ionicons name="stats-chart-outline" size={24} color="#329F6D" />
          ),
        }}
        name="Symptoms"
        component={CovidStatistics}
      />
    </BottomTabNav.Navigator>
  );
};

export default TrackPadTabNav;

const styles = StyleSheet.create({});
