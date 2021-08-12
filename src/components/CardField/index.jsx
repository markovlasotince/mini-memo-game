import React, { useEffect } from "react";

// style
import "./cardField.scss";

// actions
import { getCards } from "../../store/actions/gameplay";

// components
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";

const CardField = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.gameplay);

  useEffect(() => {
    dispatch(getCards());
    console.log("cards", cards);
  }, [cards]);

  const renderCards = () =>
    cards.map((card, i) => (
      <Card key={i} cardId={card.cardId} cardFliped={card.fliped} cardImage={card.cardImage} cardMatched={card.matched} />
    ));

  return (
    <div className="card-field-wrapper">{cards !== [] && renderCards()}</div>
  );
};

export default CardField;
