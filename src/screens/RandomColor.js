import React, { useState } from "react";
import { View, Button, FlatList, TouchableOpacity, Text } from "react-native";
import ChangeColor from "./RandomColorButton/ChangeColor";

const RandomColor = () => {
  let [color, setColor] = useState([
    { rgb: { red: 56, green: 45, blue: 47 }, edit: false }
  ]);
  //console.log(color);
  const chageEditStatus = item => {
    let index = color.findIndex(obj => obj === item);
    console.log("ind", index);
    let cpyColor = [...color];
    cpyColor[index].edit = true;
    setColor(cpyColor);
  };
  const changeColor = cpyColor => {
    // let index = color.findIndex(obj => obj === item);
    // //console.log("ind", index);
    // let cpyColor = [...color];
    // switch (userColor) {
    //   case "red": {
    //     cpyColor[index].rgb.red += 10;
    //     break;
    //   }
    //   case "green": {
    //     cpyColor[index].rgb.green += 10;
    //     break;
    //   }
    //   case "blue": {
    //     cpyColor[index].rgb.blue += 10;
    //     break;
    //   }
    // }
    setColor(cpyColor);
  };
  return (
    <View>
      <Button
        onPress={() => {
          let rgbData = randomColor();
          console.log(rgbData);
          setColor([
            ...color,
            {
              rgb: {
                red: rgbData.red,
                green: rgbData.green,
                blue: rgbData.blue
              },
              edit: false
            }
          ]);
        }}
        title="Add color"
      >
        Add Color
      </Button>
      <FlatList
        data={color}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  chageEditStatus(item);
                }}
              >
                <View
                  style={{
                    height: 150,
                    width: 100,
                    backgroundColor: `rgb(${item.rgb.red},${item.rgb.green},${item.rgb.blue})`
                  }}
                />
              </TouchableOpacity>
              {item.edit && (
                <View>
                  {/* <Button
                    title={"Red"}
                    onPress={() => {
                      changeColor("red", item);
                    }}
                  ></Button>
                  <Button
                    title={"green"}
                    onPress={() => {
                      changeColor("green", item);
                    }}
                  ></Button>
                  <Button
                    title={"blue"}
                    onPress={() => {
                      changeColor("blue", item);
                    }}
                  ></Button> */}
                  <ChangeColor
                    color={color}
                    colorName={"red"}
                    item={item}
                    changeColor={changeColor}
                  />
                  <ChangeColor
                    color={color}
                    colorName={"green"}
                    item={item}
                    changeColor={changeColor}
                  />
                  <ChangeColor
                    color={color}
                    colorName={"blue"}
                    item={item}
                    changeColor={changeColor}
                  />
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return { red: red, green: green, blue: blue };
};

export default RandomColor;
