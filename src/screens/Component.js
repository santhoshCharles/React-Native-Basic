import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ComponentScreen = () => {
  const GREETING = "bye";
  const newTry = { name: "santhosh" };
  const initialAss = <Text>new try</Text>;
  return (
    <View>
      <Text style={textStyle.textStyle}>new screen</Text>
      <Text style={textStyle.greeting}>{GREETING}</Text>
      <Text style={textStyle.greeting}>hi i am {newTry.name}</Text>
      {initialAss}
    </View>
  );
};
const textStyle = StyleSheet.create({
  textStyle: { fontSize: 30 },
  greeting: { fontSize: 45 }
});
export default ComponentScreen;
