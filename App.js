import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/Component";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import RandomColor from "./src/screens/RandomColor";
import CustomColor from "./src/screens/CustomColor";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    NewScreen: ComponentScreen,
    ListScreen: ListScreen,
    ImageScreen: ImageScreen,
    Counter: Counter,
    RandomColor: RandomColor,
    CustomColor: CustomColor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
