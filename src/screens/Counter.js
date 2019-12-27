import React, { useState } from "react";
import { Button, View, Text } from "react-native";

const Counter = () => {
  let [count, setCounter] = useState(0);
  return (
    <View>
      <Button
        title={"Increment"}
        onPress={() => {
          setCounter(count + 1);
        }}
      ></Button>
      <Text>{count}</Text>
      <Button
        title={"Decrement"}
        onPress={() => {
          setCounter(count - 1);
        }}
      ></Button>
    </View>
  );
};
export default Counter;
