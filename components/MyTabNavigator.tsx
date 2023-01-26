import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
// import Login from '../screens/Login';
// import Signup from '../screens/Signup';
// import Landing from '../screens/Landing';
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
          ),
        }}
      />
      
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
     
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Login" component={Login} /> */}
      {/* <Tab.Screen name="Signup" component={Signup} /> */}
      {/* <Tab.Screen name="Landing" component={Landing} /> */}
    </Tab.Navigator>
  );
};

export default MyTabNavigator;
