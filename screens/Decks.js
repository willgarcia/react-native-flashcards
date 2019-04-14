import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { styles } from "../assets/styles/styles";
// import { getDecks } from "../utils/api";

class Decks extends Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   getDecks().then(decks => {
  //     dispatch(receiveDecks(decks));
  //   });
  // }

  render() {
    const { test } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>{test}</Text>
          {/* {decks.map(deck => (
            <Deck
              deck={deck}
              key={deck.title}
              navigation={this.props.navigation}
            />
          ))} */}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: JSON.stringify(state)
  };
}

export default connect(mapStateToProps)(Decks);
