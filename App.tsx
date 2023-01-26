import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabNavigator from './components/MyTabNavigator';

export default function App() {
  return (
    <NavigationContainer>   
      <MyTabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});
