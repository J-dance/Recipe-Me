import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Page from "../components/Page";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "../components/MyTabNavigator";

type Props = BottomTabScreenProps<
  RootTabParamList,
  "AddRecipe",
  "mainNavigation"
>;

const AddRecipe = ({ navigation, route }: Props) => {
  const submitRecipe = () => {
    navigation.navigate("Home");
  };

  return (
    <Page>
      <Text>Add recipe</Text>
      <Button onPress={submitRecipe} title="Submit" />
    </Page>
  );
};

export default AddRecipe;
