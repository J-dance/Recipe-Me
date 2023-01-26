import React from 'react'
import Page from '../components/Page';
import { Text, Button } from 'react-native';
import { useUserContext } from '../assets/context';

const Landing = () => {
  const { setUserData } = useUserContext();
  const loginUser = () => {
    setUserData({
      name: '',
      id: '',
      authenticated: true,
      recipes: []
    })
  };
  return (
    <Page>
      <Button
        onPress={loginUser}
        title="Login"
        color="#D44D5C"
        accessibilityLabel="Log in to your account"
      />
    </Page>
  )
}

export default Landing