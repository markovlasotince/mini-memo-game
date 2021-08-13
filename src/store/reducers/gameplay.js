import actionTypes from "../actionTypes";

export default function gamePlayReducer(
  state = {
    cardFieldSize: 0,
    totalNumberOfClicks: 0,
    cards: [],
    card: null,
    matchedCards: [],
  },
  action
) {
  switch (action.type) {
    case actionTypes.INIT_GAME:
      return {
        ...state,
        // cardFieldSize: action.cardFieldSize || state.cardFieldSize,
        cardFieldSize: action.cardFieldSize,
        cards: action.cards,
      };
    case actionTypes.CARD_CLICK:
      return {
        ...state,
        totalNumberOfClicks: state.totalNumberOfClicks + 1,
      };
    case actionTypes.FLIP_CARD:
      return {
        ...state,
      };
    case actionTypes.GET_CARDS:
      return {
        ...state,
        cards: action.cards ? action.cards : state.cards,
      };
    case actionTypes.GET_CARD:
      return {
        ...state,
        card: action.card,
      };
    case actionTypes.GET_MATCHED_CARDS:
      return {
        ...state,
        matchedCards: state.cards.filter((card) => card.matched),
      };
    case actionTypes.RESET_STATE:
      return {
        totalNumberOfClicks: 0,
        matchedCards: [],
      };
    case actionTypes.SET_FIELD_SIZE:
      return {
        cardFieldSize: action.cardFieldSize,
        totalNumberOfClicks: 0,
      };
    default:
      return state;
  }
}
