import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/styles";

export class Deck extends Component {
  render() {
    const { deck, navigation } = this.props;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DeckDetail", { deck })}
      >
        <View style={[styles.container, styles.borderBottom]}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
