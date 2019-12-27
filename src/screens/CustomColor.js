import React from "react";
import { View, StyleSheet } from "react-native";
import CustomColorButton from "./CustomColor/CustomColorButton";

const CustomColor = () => {
  return (
    <View>
      <CustomColorButton title="redd" />
      <CustomColorButton title="green" />
      <CustomColorButton title="blue" />
      <View style={style.colorView}></View>
    </View>
  );
};

const style = StyleSheet.create({
  colorView: {
    height: 100,
    width: 100
  }
});

export default CustomColor;
