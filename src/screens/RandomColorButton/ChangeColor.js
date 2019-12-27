import React from "react";
import { View, Button } from "react-native";

const ChangeColor = props => {
  const { colorName, item, color } = props;
  ChangeRgb = () => {
    let index = color.findIndex(obj => obj === item);
    console.log("ind", index);
    let cpyColor = [...color];
    switch (colorName) {
      case "red": {
        if (cpyColor[index].rgb.red < 255 && cpyColor[index].rgb.red > 0) {
          cpyColor[index].rgb.red += 10;
        }
        break;
      }
      case "green": {
        if (cpyColor[index].rgb.green < 255 && cpyColor[index].rgb.green > 0) {
          cpyColor[index].rgb.green += 10;
        }
        break;
      }
      case "blue": {
        if (cpyColor[index].rgb.blue < 255 && cpyColor[index].rgb.blue > 0) {
          cpyColor[index].rgb.blue += 10;
        }
        break;
      }
    }
    props.changeColor(cpyColor);
  };
  return (
    <View>
      <Button
        title={colorName}
        onPress={() => {
          ChangeRgb();
        }}
      ></Button>
    </View>
  );
};

export default ChangeColor;
