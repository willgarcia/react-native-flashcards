import { getInitialData } from "../utils/api";
import { receiveDecks } from "./index";

export function storeInitialData() {
  return dispatch => {
    return getInitialData().then(({ decks }) => {
      dispatch(receiveDecks(decks));
    });
  };
}
