import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

// props for the stack nav
export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      id="loginNavigation"
      initialRouteName="Landing"
    >
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ title: "Landing", headerShown: false}}

      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Sign up" }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
