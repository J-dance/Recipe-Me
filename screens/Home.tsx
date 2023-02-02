import React, { FC } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Page from "../components/Page";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";

const Home: FC = () => {
  return (
    <Page>
      <TitleSection
        size="s"
        text1={{
          text: "Ho",
          color: "#FFFFFF",
        }}
        text2={{
          text: "me",
          color: "#FF9000",
        }}
      />

      <SearchBar />
    </Page>
  );
};

export default Home;
