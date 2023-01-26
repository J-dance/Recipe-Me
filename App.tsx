import { useState, useCallback } from "react";
import AuthContainer from "./components/AuthContainer";
import { UserContext } from './assets/context'
import { User } from './assets/types';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userData, setUserData] = useState<User>({
    name: '',
    id: '',
    authenticated: false,
    recipes: []
  });

  const [fontsLoaded] = useFonts({
    'Donegal-One': require('./assets/fonts/DonegalOne-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContext.Provider value= {{ userData, setUserData }}>
      <NavigationContainer>   
        <AuthContainer />
        <StatusBar style="auto" />
      </NavigationContainer>
    </UserContext.Provider>
  );
}


