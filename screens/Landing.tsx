import React from "react";
import Page from "../components/Page";
import { Button, StyleSheet, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { xml as bookIconXml } from "../assets/icons/book.js";
import { RootStackParamList } from '../components/LoginNavigator';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Landing",
  "loginNavigation"
>;

const Landing = ({ navigation }: Props) => {
  
  return (
    <Page>
      <View style={styles.landingContainer}>
        <SvgXml xml={bookIconXml} width={100} height={100} />
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, {color: "#FFFFFF"}]}>Recipe-</Text>
          <Text style={[styles.titleText, {color: "#FF9000"}]}>Me</Text>
        </View>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Log in"
          color="#FFFFFF"
          accessibilityLabel="Log in to your account"
        />
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    width: '80%',
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 30
  },
  titleText: {
    fontFamily: 'Donegal-One',
    fontSize: 42,
  }
})

export default Landing;
