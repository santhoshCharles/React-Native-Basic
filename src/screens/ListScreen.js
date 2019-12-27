import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend 1", age: 10 },
    { name: "friend 2", age: 10 },
    { name: "friend 3", age: 10 },
    { name: "friend 4", age: 10 },
    { name: "friend 5", age: 10 },
    { name: "friend 6", age: 10 }
  ];
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={listStyleSheet.listItemStyle}>
            Name: {item.name} Age: {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};
const listStyleSheet = StyleSheet.create({
  listItemStyle: { marginVertical: 70 }
});

export default ListScreen;
