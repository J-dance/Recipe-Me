import React from 'react';
import { useUserContext } from '../assets/context';
import Landing from '../screens/Landing';
import MyTabNavigator from './MyTabNavigator';

const AuthContainer = () => {
  const { userData } = useUserContext();

  return userData.authenticated ? <MyTabNavigator /> : <Landing />
}

export default AuthContainer