import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { styles } from "../assets/styles/styles";

export default class AddCard extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>
          <Input
            placeholder="Question"
            leftIcon={{ type: "font-awesome", name: "question-circle" }}
          />
          <Input
            placeholder="Answer"
            leftIcon={{ type: "font-awesome", name: "fire" }}
          />
          <Button
            style={styles.button}
            title="Add a question"
            // onPress={() => navigation.navigate("TakeQuizz", { deck })}
          />
        </View>
      </View>
    );
  }
}
