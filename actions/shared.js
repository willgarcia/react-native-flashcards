import { receiveDecks } from "../actions/index";
import { getDecks, getInitialData, initDecks } from "../utils/api";

export function storeInitialData() {
  return dispatch => {
    return getDecks().then(decks => {
      if (decks === null) {
        return getInitialData()
          .then(({ decks }) => {
            return initDecks(decks)
              .then(() => {
                dispatch(receiveDecks(decks));
              })
              .catch(error => handleError("initDecks", error));
          })
          .catch(error => handleError("getInitialData", error));
      } else {
        dispatch(receiveDecks(decks));
      }
    });
  };
}

export function handleError(code, error) {
  console.log(code, error);
  throw error;
}
