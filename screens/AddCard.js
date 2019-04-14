import React, { Component } from "react";
import { Animated, Text, View } from "react-native";
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
    errors: [],
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0)
  };

  componentDidMount() {
    const { opacity, width, height } = this.state;

    Animated.timing(opacity, { toValue: 1, duration: 1500 }).start();
    Animated.spring(width, { toValue: 120, speed: 3 }).start();
    Animated.spring(height, { toValue: 120, speed: 3 }).start();
  }

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

    if (this.isFormValid(question, answer)) {
      const { deck } = this.props.navigation.state.params;
      addCardToDeck(deck.title, { question, answer })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch(error => handleError("AddCard", error));
    }
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const { errors } = this.state;

    const { opacity, width, height } = this.state;
    return (
      <View>
        <View style={styles.animation}>
          <Animated.Image
            style={[{ opacity, width, height }, { alignItems: "center" }]}
            source={require("../assets/images/deck.png")}
          />
        </View>

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

          <View style={styles.buttons}>
            <Button
              style={styles.button}
              title="Add"
              onPress={() => this.handleSubmit(this.props.navigation)}
            />
          </View>
        </View>
      </View>
    );
  }
}
