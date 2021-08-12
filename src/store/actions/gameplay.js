import actionTypes from "../actionTypes";
import {
  generateCards,
  getCardById,
  flipCardFromDeck,
} from "../../utils/gameLogic";

export const initGame = (cardFieldSize, cards) => ({
  type: actionTypes.INIT_GAME,
  cardFieldSize,
  cards,
});

export const cardClicked = () => ({
  type: actionTypes.CARD_CLICK,
});

export const getCards = (cards) => ({
  type: actionTypes.GET_CARDS,
  cards
});

export const getCard = (card) => ({
  type: actionTypes.GET_CARD,
  card,
});

export const initGameAction = (cardFieldSize = 3) => (dispatch) => {
  dispatch(initGame(cardFieldSize, generateCards(cardFieldSize)));
};

export const flipCard = (cards, cardId) => (dispatch) => {
  dispatch(cardClicked());
  dispatch(getCards(flipCardFromDeck(cards, cardId)));
  dispatch(getCurrentlyMatchedCards());
};

export const getCardByIdAction = (cardId, cards) => (dispatch) => {
  dispatch(getCard(getCardById(cards, cardId)));
};

export const getCurrentlyMatchedCards = () => ({
  type: actionTypes.GET_MATCHED_CARDS
})
