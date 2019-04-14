import { receiveDecks } from "../actions/index";
import { getInitialData, initDecks } from "../utils/api";

export function storeInitialData() {
  return dispatch => {
    return getInitialData()
      .then(({ decks }) => {
        return initDecks(decks)
          .then(() => {
            dispatch(receiveDecks(decks));
          })
          .catch(error => handleError("initDecks", error));
      })
      .catch(error => handleError("getInitialData", error));
  };
}

export function handleError(code, error) {
  console.log(code, error);
  throw error;
}
