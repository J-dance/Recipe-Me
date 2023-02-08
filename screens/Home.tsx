import React, { FC } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Page from "../components/Page";
import TitleSection from "../components/TitleSection";
import SearchBar from "../components/SearchBar";
import { Recipe } from "../assets/types";
import RecipeTile from "../components/RecipeTile";

const recipe1: Recipe = {
  id: "wesfsv",
  title: "Mushroom creamy Pasta",
  description: "yummy yums",
  category: ["Comforting", "Creamy", "Carbs"],
  prepTime: 15,
  cookTime: 30,
  image: '../assets/mushpasta.jpg',  // not sure..
  difficulty: "easy",
  instructions: ["Prep food", "boil water", "eat"]
};

const recipe2: Recipe = {
  id: "dsvfa",
  title: "Mushroom creamy yummyum Pasta",
  description: "yummy yums",
  category: ["Comforting", "Creamy", "Carbs", "hungover", "winter"],
  prepTime: 20,
  cookTime: 60,
  image: undefined,  // not sure..
  difficulty: "easy",
  instructions: ["Prep food", "boil water", "eat"]
};

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

      <SearchBar items={[recipe1]} />

      <FlatList
        style={styles.listContainer}
        data={[recipe1, recipe2]}
        renderItem={({item}) => <RecipeTile recipe={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

    </Page>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "90%",
    marginTop: 10
  }
})

export default Home;
