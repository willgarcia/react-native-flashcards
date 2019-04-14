import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  Button,
  FormInput,
  FormLabel,
  FormValidationMessage
} from "react-native-elements";
import { handleError } from "../actions/shared";
import { styles } from "../assets/styles/styles";
import { addCardToDeck } from "../utils/api";

export default class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    errors: []
  };

  isFormValid(question, answer) {
    const errors = [];
    if (question === "") {
      errors.push("question");
    }
    if (answer === "") {
      errors.push("answer");
    }
    this.setState({ errors });

    return errors.length === 0;
  }

  handleSubmit(navigation) {
    const { question, answer } = this.state;

    const valid = this.isFormValid(question, answer);

    if (valid) {
      const card = { question, answer };
      console.log("AddCard.handleSubmit.card", card);

      const { deck } = this.props.navigation.state.params;
      addCardToDeck(deck.title, card)
        .then(() => {
          navigation.navigate("Home");
        })
        .catch(error => handleError("AddCard", error));
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const { errors } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title}</Text>

          <FormLabel>Question</FormLabel>
          <FormInput
            onChangeText={input => this.setState({ question: input })}
          />
          {errors.includes("question") && (
            <FormValidationMessage>
              {"This field is required"}
            </FormValidationMessage>
          )}

          <FormLabel>Answer</FormLabel>
          <FormInput onChangeText={input => this.setState({ answer: input })} />
          {errors.includes("answer") && (
            <FormValidationMessage>
              {"This field is required"}
            </FormValidationMessage>
          )}

          <Button
            style={styles.button}
            title="Add"
            onPress={() => this.handleSubmit(this.props.navigation)}
          />
        </View>
      </View>
    );
  }
}
