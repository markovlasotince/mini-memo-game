import actionTypes from "../actionTypes";

export default function gamePlayReducer(
  state = {
    cardFieldSize: 0,
    totalNumberOfClicks: 0,
    cards: [],
    card: null,
    matchedCards: []
  },
  action
) {
  switch (action.type) {
    case actionTypes.INIT_GAME:
      return {
        ...state,
        cardFieldSize: action.cardFieldSize || state.cardFieldSize,
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
      return{
        ...state,
        matchedCards: state.cards.filter(card => card.matched)
      }
    default:
      return state;
  }
}
