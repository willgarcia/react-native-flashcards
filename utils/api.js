import { AsyncStorage } from "react-native";
import { decks } from "../utils/_DATA";

export function getInitialData() {
  return Promise.all([decks]).then(([decks]) => ({
    decks
  }));
}

const DECKS_STORAGE_KEY = "DeckApp:Decks6";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function getDeck(title) {
  return getDecks().then(decks => {
    return decks.find(deck => deck.title === title);
  });
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      const decks = data.map(deck => {
        if (deck.title === title) {
          deck.questions.push(card);
        }
        return deck;
      });
      return initDecks(decks);
    });
}

export function initDecks(data) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
}

export function saveDeckTitle(title) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      data.push({
        title,
        questions: []
      });
      return initDecks(data);
    });
}
