import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
// import beach from "../../../assets/beach.jbg";
// import forest from "./../../../assets/forest.jbg";
// import mountain from "./../../../assets/mountain/jbg";

const ImageDetails = props => {
  //console.log(" hai", props);
  //const color = "beach";
  return (
    <View>
      {/* <ScrollView style={{ flex: 1 }}> */}
      <Text>This is {props.title}</Text>
      <Image source={props.imageSource}></Image>
      {/* </ScrollView> */}
    </View>
  );
};

const imageStyle = StyleSheet.create({});

export default ImageDetails;
