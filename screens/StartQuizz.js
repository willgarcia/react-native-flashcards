import React, { Component } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Badge, Button, Tile } from "react-native-elements";
import { styles } from "../assets/styles/styles";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

export default class StartQuizz extends Component {
  state = {
    current: 0,
    showAnswer: false,
    countCorrect: 0,
    countIncorrect: 0,
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
    this.setState({ current, showAnswer: false });

    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { current, showAnswer, countCorrect } = this.state;
    const { deck } = this.props.navigation.state.params;
    const question = deck.questions[current];
    const completed = current === deck.questions.length;

    if (completed) {
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
            <Text style={styles.title}>{deck.title} quizz</Text>

            <Text style={[styles.title, { fontSize: 16 }]}>
              {countCorrect} of {deck.questions.length} correct answers found!
            </Text>
          </View>

          <View style={styles.buttons}>
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
        </View>
      );
    }

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>{deck.title} quizz</Text>
        </View>

        <Badge containerStyle={styles.quizzProgress}>
          <Text>{`${current + 1}/${deck.questions.length}`}</Text>
        </Badge>

        <Tile
          imageSrc={require("../assets/images/icecube.png")}
          title={deck.title}
          icon={{
            name: "question-circle",
            type: "font-awesome",
            size: 100,
            color: "violet"
          }}
          contentContainerStyle={{ height: 100 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>{question.question}</Text>
          </View>
          {!showAnswer && (
            <View>
              <TouchableOpacity onPress={() => this.revealAnswer()}>
                <Text>Show hint</Text>
              </TouchableOpacity>
            </View>
          )}
          {showAnswer && (
            <View style={styles.answer}>
              <Text>{question.answer}</Text>
            </View>
          )}
        </Tile>

        <View style={styles.buttons}>
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
      </View>
    );
  }
}
