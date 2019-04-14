import { Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import DeckDetail from "../screens/DeckDetail";
import HomeScreen from "../screens/HomeScreen";
import NewDeck from "../screens/NewDeck";
import { black, purple, white } from "../utils/colors";

const Tabs = TabNavigator(
  {
    Home: HomeScreen,
    NewDeck
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 90,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        paddingBottom: 30,
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    }
  }
});
