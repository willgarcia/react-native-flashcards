import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware/index";
import { MainNavigator } from "./navigation/AppNavigator";
import reducer from "./reducers/index";
import { setLocalNotification } from "./utils/helpers";

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View
          style={{
            flex: 1
          }}
        >
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
