import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { connect } from "react-redux";
import { styles } from "../assets/styles/styles";
import { Deck } from "./Deck";

class Decks extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   getDecks().then(decks => {
  //     dispatch(receiveDecks(decks));
  //   });
  // }

  render() {
    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View>
          {decks.map(deck => (
            <Deck
              deck={deck}
              key={deck.title}
              navigation={this.props.navigation}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: []
  };
}

export default connect(mapStateToProps)(Decks);
