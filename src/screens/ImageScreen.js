import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import ImageDetails from "./ImageComponent/ImageDetails";

const ImageScreen = () => {
  const imageData = [
    { title: "beach", imagePath: require("../../assets/beach.jpg") },
    { title: "forest", imagePath: require("../../assets/forest.jpg") },
    { title: "mountain", imagePath: require("../../assets/mountain.jpg") }
  ];
  return (
    <View style={{ flex: 1 }}>
      <Text>Image Screen</Text>
      {/* <ImageDetails
        title={"beach"}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title={"forest"}
        imageSource={require("../../assets/forest.jpg")}
      /> */}
      {/* <ImageDetails
        title={"mountain"}
        imageSource={require("../../assets/mountain.jpg")}
      /> */}
      <FlatList
        data={imageData}
        keyExtractor={item => item.title}
        renderItem={({ image }) => {
          //   return (
          //     <ImageDetails
          //       title={image.title}
          //       //   imageSource={require(image.imagePath)}
          //     />
          //   );
          {
            console.log(image);
          }
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <ImageDetails title={item.title} imageSource={item.imagePath} />
              <ImageDetails title={item.title} imageSource={item.imagePath} />
            </View>
            // <View>
            //   {" "}
            //   <Text>This is {item.title}</Text>
            //   <Image source={item.imageSource}></Image>
            // </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
