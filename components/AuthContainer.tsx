import React from 'react';
import { useUserContext } from '../assets/context';
import MyTabNavigator from './MyTabNavigator';
import LoginNavigator from './LoginNavigator';

const AuthContainer = () => {
  const { userData } = useUserContext();

  return userData.authenticated ? <MyTabNavigator /> : <LoginNavigator />
}

export default AuthContainer