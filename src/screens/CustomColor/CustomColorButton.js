import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import CustomColor from "../CustomColor";

const CustomColorButton = props => {
  const { title } = props;
  return (
    <View>
      <Text>{title}</Text>
      <View style={style.ButtonView}>
        <Button title="Incress"></Button>
      </View>
      <View style={style.ButtonView}>
        <Button title="Decress"></Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  ButtonView: {
    margin: 10
  }
});

export default CustomColorButton;
