import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { initGameAction, cardClicked } from "../../store/actions/gameplay";

// components
import CardField from "../../components/CardField";

const GamePlay = () => {
  const dispatch = useDispatch();
  const { cardFieldSize, totalNumberOfClicks, matchedCards } = useSelector(
    (state) => state.gameplay
  );

  useEffect(() => {
    console.log('init gameplay')
    dispatch(initGameAction(10));
  }, [initGameAction]);

  return (
    <div>
      <h5>Welcome to Game page</h5>
      <button onClick={() => dispatch(cardClicked())}> click </button>
      <h5>{cardFieldSize}</h5>
      <h5>{totalNumberOfClicks}</h5>
      <h5>{matchedCards && matchedCards.length / 2}</h5>
      <h6>Game board will go here</h6>
      <CardField />
    </div>
  );
};

export default GamePlay;
