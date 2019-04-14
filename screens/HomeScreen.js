import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { storeInitialData } from "../actions/shared";
import { styles } from "../assets/styles/home";
import Decks from "./Decks";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // const { dispatch } = this.props;
    this.props.dispatch(storeInitialData());
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/images/deck.png")}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Get started!</Text>
            <Text style={styles.getStartedText}>
              Create flash cards and play quizzes.
            </Text>
          </View>

          <Decks navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(HomeScreen);
