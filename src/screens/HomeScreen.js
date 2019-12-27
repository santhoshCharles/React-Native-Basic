import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation.navigate);
  return (
    <View style={{ margin: 10 }}>
      <Text style={styles.text}>Home</Text>
      <View style={{ margin: 10 }}>
        <Button
          title="Go To Component"
          onPress={() => {
            navigation.navigate("NewScreen");
          }}
          style={styles.Button}
        />
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("ListScreen");
        }}
      >
        <Text>Go To List Screen</Text>
      </TouchableOpacity> */}
      <View style={{ margin: 10 }}>
        <Button
          title="Go To List Screen"
          onPress={() => {
            navigation.navigate("ListScreen");
          }}
          style={styles.Button}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Go To ImageScreen"
          onPress={() => {
            navigation.navigate("ImageScreen");
          }}
          style={styles.Button}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Go To Counter"
          onPress={() => {
            navigation.navigate("Counter");
          }}
          style={styles.Button}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Go Random Color"
          onPress={() => {
            navigation.navigate("RandomColor");
          }}
          style={styles.Button}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Button
          title="Go Custom Color"
          onPress={() => {
            navigation.navigate("CustomColor");
          }}
          style={styles.Button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 10
  },
  Button: {
    marginVertical: 10,
    fontSize: 30
  }
});

export default HomeScreen;
