import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import AddRecipe from "../screens/AddRecipe";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      id="mainNavigation"
      initialRouteName="Home"
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: '#D44D5C',
      }}
    >
      <Tab.Screen
        name="Add Recipe"
        component={AddRecipe}
        options={{
          tabBarLabel: "Add recipe",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          )
        }}
      />
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}
      />
     
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabNavigator;
