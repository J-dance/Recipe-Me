import React, { FC } from 'react'
import { StyleSheet, Text, Button } from 'react-native';
import Page from '../components/Page';
import { useUserContext } from '../assets/context';

const Profile: FC = () => {
  const { setUserData } = useUserContext();

  const loginUser = () => {
    setUserData({
      name: '',
      id: '',
      authenticated: false,
      recipes: []
    })
  };
  return (
    <Page>
      <Text>Profile</Text>
      <Button onPress={loginUser}
        title="Log out"
        color="#D44D5C"
        accessibilityLabel="Log in to your account"
      />
    </Page>
  )
}

export default Profile