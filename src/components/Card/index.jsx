import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// style
import "./card.scss";

// actions
import { flipCard, getCardByIdAction } from "../../store/actions/gameplay";

const Card = ({ cardId, cardFliped, cardImage, cardMatched }) => {
  const dispatch = useDispatch();
  const { cards, card } = useSelector((state) => state.gameplay);

  useEffect(() => {
    dispatch(getCardByIdAction(cardId, cards));
  }, [cards]);

  return (
    <div
      className="card-wrapper"
      onClick={() => card && dispatch(flipCard(cards, cardId))}
    >
      {console.log("cards", cards)}
      This is card
      {cardFliped && cardFliped ? (
        <p>{cardImage}</p>
      ) : cardMatched ? (
        <p>{cardImage}</p>
      ) : (
        <p>background</p>
      )}
    </div>
  );
};

export default Card;
