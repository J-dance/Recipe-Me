import React from "react";
import Page from "../components/Page";
import { Button, StyleSheet, View, Text } from "react-native";
import { useUserContext } from "../assets/context";
import { SvgXml } from "react-native-svg";
import { xml as bookIconXml } from "../assets/icons/book.js";

const Landing = () => {
  const { setUserData } = useUserContext();
  const loginUser = () => {
    setUserData({
      name: "",
      id: "",
      authenticated: true,
      recipes: [],
    });
  };
  return (
    <Page>
      <SvgXml xml={bookIconXml} width={100} height={100} />
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, {color: "#FFFFFF"}]}>Recipe-</Text>
        <Text style={[styles.titleText, {color: "#FF9000"}]}>Me</Text>
      </View>
      <Button
        onPress={loginUser}
        title="Log in"
        color="#FFFFFF"
        accessibilityLabel="Log in to your account"
      />
    </Page>
  );
};

const styles = StyleSheet.create({
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
