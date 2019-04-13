import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import AddCard from "../screens/AddCard";
import DeckDetail from "../screens/DeckDetail";
import HomeScreen from "../screens/HomeScreen";
import NewDeck from "../screens/NewDeck";
import StartQuizz from "../screens/StartQuizz";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  DeckDetail,
  AddCard,
  StartQuizz
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const DeckStack = createStackNavigator({
  NewDeck
});

DeckStack.navigationOptions = {
  tabBarLabel: "New deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  DeckStack
});
