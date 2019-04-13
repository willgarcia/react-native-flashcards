import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { styles } from "../assets/styles/styles";

export default class NewDeck extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Input
            style={{ margin: 20 }}
            placeholder="Deck title"
            leftIcon={{ type: "font-awesome", name: "question-circle" }}
          />
          <Button
            style={styles.button}
            title="Add deck"
            // onPress={() => navigation.navigate("TakeQuizz", { deck })}
          />
        </View>
      </View>
    );
  }
}
