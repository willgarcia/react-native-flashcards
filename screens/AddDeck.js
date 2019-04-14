import React, { Component } from "react";
import { View } from "react-native";
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from "react-native-elements";
import { handleError } from "../actions/shared";
import { styles } from "../assets/styles/styles";
import { getDeck, saveDeckTitle } from "../utils/api";

export default class AddDeck extends Component {
  state = {
    title: "",
    errors: []
  };

  isFormValid(title) {
    const errors = [];
    if (title === "") {
      this.setState({ errors: ["title"] });
    }

    return errors.length === 0;
  }

  handleSubmit(navigation) {
    const { title } = this.state;
    const valid = this.isFormValid(title);

    if (valid) {
      saveDeckTitle(title)
        .then(() => {
          getDeck(title)
            .then(deck => {
              if (!deck) {
                throw new Error(`Ooops, deck "${title}" not found :o`);
              }
              navigation.navigate("DeckDetail", { deck });
            })
            .catch(error => handleError("saveDeckTitle.getDeck", error));
        })
        .catch(error => handleError("saveDeckTitle", error));
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <FormLabel>Deck title</FormLabel>
          <FormInput onChangeText={input => this.setState({ title: input })} />
          {errors.includes("title") && (
            <FormValidationMessage>
              {"This field is required"}
            </FormValidationMessage>
          )}

          <View style={styles.buttons}>
            <Button
              style={styles.button}
              title="Add deck"
              onPress={() => this.handleSubmit(this.props.navigation)}
            />
          </View>
        </View>
      </View>
    );
  }
}
