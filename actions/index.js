export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";
export const RECEIVE_DECKS = "RECEIVE_DECKS";

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  };
}

export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    entry
  };
}

export function receiveDecks(decks) {
  console.log("receiveDecks", decks);

  return {
    type: RECEIVE_DECKS,
    decks
  };
}
