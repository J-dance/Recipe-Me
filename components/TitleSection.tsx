import React from "react";
import { StyleSheet, View, Text } from "react-native";

export type TitleText = {
  text: string,
  color: string
};

interface TitleProps {
  size: "s" | "l";
  text1: TitleText;
  text2: TitleText;
}

const TitleSection = ({ size, text1, text2 }: TitleProps) => {
  return (
    <View
      style={[
        styles.titleContainer,
        {
          width: size === "l" ? "80%" : "70%",
          paddingVertical: 10,
          marginVertical: 30,
        },
      ]}
    >
      <Text
        style={[
          styles.TitleText,
          {
            color: text1.color,
            fontSize: size === "l" ? 42 : 32
          },
        ]}
      >
        {text1.text}
      </Text>
      <Text
        style={[
          styles.TitleText,
          {
            color: text2.color,
            fontSize: size === "l" ? 42 : 32
          },
        ]}
      >
        {text2.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    paddingVertical: 10,
    marginVertical: 30
  },
  TitleText: {
    fontFamily: "Donegal-One",
  },
});

export default TitleSection;
