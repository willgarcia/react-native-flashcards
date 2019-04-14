import { AsyncStorage } from "react-native";
import { decks } from "../utils/_DATA";
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from "./_calendar";

export function getInitialData() {
  return Promise.all([decks]).then(([decks]) => ({
    decks
  }));
}

export function fetchCalendarResults() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(formatCalendarResults);
}

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}

const DECKS_STORAGE_KEY = "DeckApp:Decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

// export function getDeck(id) {
//   return getDecks().then(data => {
//     return data[id];
//   });
// }

// export function addCardToDeck(title, card) {
//   return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//     .then(JSON.parse)
//     .then(data => {
//       const data = {
//         ...decks,
//         [title]: {
//           ...decks[title],
//           questions: decks[title].questions
//             ? decks[title].questions.concat(card)
//             : [card]
//         }
//       };
//       return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
//     });
// }

export function initDecks(data) {
  console.log("initDecks", decks);

  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
}

// export function saveDeckTitle(title) {
//   return AsyncStorage.mergeItem(
//     DECKS_STORAGE_KEY,
//     JSON.stringify({
//       [title]: {
//         title,
//         questions: []
//       }
//     })
//   );
// }
