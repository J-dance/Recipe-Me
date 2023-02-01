import React, { FC, ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, SafeAreaView } from 'react-native';

interface ParentCompProps {
  // children?: ReactNode;
  children: JSX.Element | JSX.Element[];
};

const Page: FC<ParentCompProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.page}>
      <LinearGradient
        colors={['#284B63', '#3C6E71']}
        style={styles.background}
      >
        { children }
      </LinearGradient>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%'
  },
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default Page