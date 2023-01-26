import { useState } from "react";
import AuthContainer from "./components/AuthContainer";
import { UserContext } from './assets/context'
import { User } from './assets/types';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userData, setUserData] = useState<User>({
    name: '',
    id: '',
    authenticated: false,
    recipes: []
  });

  return (
    <UserContext.Provider value= {{ userData, setUserData }}>
      <NavigationContainer>   
        <AuthContainer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserContext.Provider>
  );
}


