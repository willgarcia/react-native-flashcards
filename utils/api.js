import { AsyncStorage } from "react-native";
import { decks } from "../utils/_DATA";

export function getInitialData() {
  return Promise.all([decks]).then(([decks]) => ({
    decks
  }));
}

const DECKS_STORAGE_KEY = "DeckApp:Decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function getDeck(id) {
  return getDecks().then(data => {
    return data[id];
  });
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(JSON.parse)
    .then(data => {
      const decks = {
        ...decks,
        [title]: {
          ...decks[title],
          questions: decks[title].questions
            ? decks[title].questions.concat(card)
            : [card]
        }
      };
      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    });
}

export function initDecks(data) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
}
