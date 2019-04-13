import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../assets/styles/styles";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

export default class StartQuizz extends Component {
  state = {
    current: 0,
    showAnswer: false,
    countCorrect: 0,
    countIncorrect: 0
  };

  restartQuizz = () => {
    this.setState({
      current: 0,
      showAnswer: false,
      countCorrect: 0,
      countIncorrect: 0
    });
  };

  revealAnswer() {
    this.setState({ showAnswer: true });
  }

  submitAnswer(isCorrect) {
    if (isCorrect) {
      const countCorrect = this.state.countCorrect + 1;
      this.setState({ countCorrect });
    } else {
      const countIncorrect = this.state.countIncorrect + 1;
      this.setState({ countIncorrect });
    }

    const current = this.state.current + 1;
    this.setState({ current });

    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { current, showAnswer, countCorrect } = this.state;
    const { deck } = this.props.navigation.state.params;
    const question = deck.questions[current];
    const completed = current === deck.questions.length;

    if (completed) {
      return (
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>{deck.title} quizz</Text>
          </View>

          <Text>
            {countCorrect}/{deck.questions.length} correct answers found!
          </Text>

          <Button
            style={styles.button}
            title="Re-start quizz"
            onPress={() => this.restartQuizz()}
          />
          <Button
            style={styles.button}
            title="Back to deck"
            onPress={() =>
              this.props.navigation.navigate("DeckDetail", { deck })
            }
          />
        </View>
      );
    }

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title} quizz</Text>
        </View>

        <Text style={styles.quizzProgress}>{`${current + 1}/${
          deck.questions.length
        }`}</Text>

        <Text>{question.question}</Text>

        {!showAnswer && (
          <TouchableOpacity onPress={() => this.revealAnswer()}>
            <Text>Show hint</Text>
          </TouchableOpacity>
        )}

        {showAnswer && <Text>{question.answer}</Text>}

        <Button
          style={styles.button}
          title="Correct"
          onPress={() => this.submitAnswer(true)}
        />
        <Button
          style={styles.button}
          title="Incorrect"
          onPress={() => this.submitAnswer(false)}
        />
      </View>
    );
  }
}
