import { Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import AddCard from "../screens/AddCard";
import AddDeck from "../screens/AddDeck";
import DeckDetail from "../screens/DeckDetail";
import HomeScreen from "../screens/HomeScreen";
import StartQuizz from "../screens/StartQuizz";
import { purple, white } from "../utils/colors";

const tabBarOptions = {
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
  },
  inactiveTintColor: "gray"
};

const HomeTabs = TabNavigator(
  {
    Home: HomeScreen,
    AddDeck
  },
  {
    tabBarOptions
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: HomeTabs
  },
  DeckDetail,
  AddCard,
  StartQuizz
});
