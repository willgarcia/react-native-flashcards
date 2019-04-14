import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { receiveDecks } from "../actions/index";
import { styles } from "../assets/styles/styles";
import { getDecks } from "../utils/api";
import { Deck } from "./Deck";

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => {
      dispatch(receiveDecks(decks));
    });
  }

  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View>
          {decks.map((deck, index) => (
            <Deck deck={deck} key={index} navigation={this.props.navigation} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks || []
  };
}

export default connect(mapStateToProps)(Decks);
