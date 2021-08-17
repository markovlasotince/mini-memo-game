import actionTypes from "../actionTypes";
import {
  generateCards,
  getCardById,
  flipCardFromDeck,
} from "../../helper/gameLogic";

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
  cards,
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
  type: actionTypes.GET_MATCHED_CARDS,
});

export const resetState = () => ({
  type: actionTypes.RESET_STATE,
});

export const setGameFieldSize = (cardFieldSize) => ({
  type: actionTypes.SET_FIELD_SIZE,
  cardFieldSize,
});

export const settingScore = (loading) => ({
  type: actionTypes.LOADING_SCORE,
  loadingScore: loading,
});

export const setScore = (cardFieldSize, totalNumberOfClicks, username) => (
  dispatch
) => {
  if (!cardFieldSize) {
    return;
  }
  dispatch(settingScore(true));

  let score = getScoreFromLocalStorage();

  if (!score) {
    score = {};
  }

  if (!score[cardFieldSize]) {
    score[cardFieldSize] = [
      {
        score: totalNumberOfClicks,
        username: username,
        cardFieldSize,
      },
    ];
    setScoreInLocalStorage(score);
  } else {
    score[cardFieldSize].push({
      score: totalNumberOfClicks,
      username: username,
      cardFieldSize,
    });
    score[cardFieldSize].sort((a, b) => a.score - b.score);
    setScoreInLocalStorage(score);
  }
  setTimeout(() => {
    dispatch(settingScore(false));
  }, 2000);
};

const setScoreInLocalStorage = (score) => {
  localStorage.setItem("score", JSON.stringify(score));
};

export const getScoreFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("score"));
};

export const setUsername = (username) => ({
  type: actionTypes.SET_USERNAME,
  username,
});
