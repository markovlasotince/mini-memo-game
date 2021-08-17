import actionTypes from "../actionTypes";

export default function gamePlayReducer(
  state = {
    cardFieldSize: 0,
    totalNumberOfClicks: 0,
    cards: [],
    card: null,
    matchedCards: [],
    loadingScore: false,
    username: ""
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
        loadingScore: null,
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
        username: state.username,
        cardFieldSize: action.cardFieldSize,
        totalNumberOfClicks: 0,
      };
    case actionTypes.LOADING_SCORE:
      return {
        ...state,
        loadingScore: action.loadingScore,
      };
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
}
