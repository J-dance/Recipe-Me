import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  const handleChange = () => {};

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="search recipes.."
        onChangeText={handleChange}
      />
      <View style={styles.icon}>
        <Ionicons name="search" color="#353535" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "relative",
    width: "90%",
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 32,
    backgroundColor: "#FFFFFF",
    color: "#353535",
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    left: 6,
    top: 8,
  },
});

export default SearchBar;
