import React from "react";
import { Recipe } from "../assets/types";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface RecipeTileProps {
  recipe: Recipe;
}

// title, category, prep time, cook time, difficulty, image
const RecipeTile = ({ recipe }: RecipeTileProps) => {
  return (
    <TouchableOpacity style={styles.tile}>
      {
        recipe.image !== undefined && <ImageBackground source={require(`../assets/mushpasta.jpg`)} resizeMode="cover" style={styles.backgroundImg}></ImageBackground>
      }
      <View style={styles.foreground}></View>
      <Text style={styles.title}>{recipe.title}</Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {recipe.category.map((item) => {
          return (
            <Text key={item} style={[styles.listItemText, { marginHorizontal: 12 }]}>
              {item}
            </Text>
          );
        })}
      </ScrollView>

      <View style={styles.rowContainer}>
        <Text style={styles.listItemText}>{recipe.difficulty}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="time" color="#FFFFFF" size={18} style={{marginRight: 5}} />
          <Text style={styles.listItemText}>{`${
            recipe.prepTime + recipe.cookTime
          } mins`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const marginVertical = 24;

const styles = StyleSheet.create({
  tile: {
    position: "relative",
    overflow: "hidden",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 50,
    width: "100%",
    shadowColor: "#353535",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  foreground: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(53, 53, 53, 0.4)",
  },
  title: {
    fontSize: 20,
    marginTop: marginVertical,
    marginHorizontal: 12,
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Donegal-One",
  },
  listItemText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Donegal-One",
    textAlign: "center",
  },
  categoryContainer: {
    width: "90%",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 30,
    marginHorizontal: 12,
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: marginVertical,
    marginHorizontal: 12,
  },
  backgroundImg: {
    position: "absolute",
    zIndex: -2,
    width: "100%",
    height: "100%"
  }
});

export default RecipeTile;
