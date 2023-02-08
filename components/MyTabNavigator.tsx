import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import AddRecipe from "../screens/AddRecipe";
import Ionicons from "@expo/vector-icons/Ionicons";

// props for the bottomTab nav
export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  AddRecipe: undefined;
};

// create bottom tab with props
const Tab = createBottomTabNavigator<RootTabParamList>();

const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      id="mainNavigation"
      initialRouteName="Home"
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor: '#D44D5C',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={{
          tabBarLabel: "Add recipe",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
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
