import React from "react";
import Page from "../components/Page";
import { Button, StyleSheet, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { xml as bookIconXml } from "../assets/icons/book.js";
import { RootStackParamList } from "../components/LoginNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import TitleSection from "../components/TitleSection";

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

        <TitleSection
          size="l"
          text1={{
            text: "Recipee-",
            color: "#FFFFFF",
          }}
          text2={{
            text: "Me",
            color: "#FF9000",
          }}
        />

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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Landing;
