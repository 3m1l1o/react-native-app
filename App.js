import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import componentsScreen from "./src/screens/componentsScreen";
import ListScreen from "./src/screens/listScreen";
import ImageScreen from "./src/screens/ImageScreen";
//import ImageDetails from "./src/components/imageDetails";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/colorScreen";
import SquareScreen from "./src/screens/SquareScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Img: ImageDetails,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);
export default createAppContainer(navigator);
