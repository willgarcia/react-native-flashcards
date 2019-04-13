import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { styles } from "../assets/styles/styles";

export default class DeckDetail extends Component {
  state = {
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

  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
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
          <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            title="Add a new card"
            onPress={() => navigation.navigate("AddCard", { deck })}
          />
          <Button
            style={styles.button}
            title="Start a quizz"
            onPress={() => navigation.navigate("StartQuizz", { deck })}
          />
        </View>
      </View>
    );
  }
}
