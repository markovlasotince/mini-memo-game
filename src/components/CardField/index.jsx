import React, { useEffect } from "react";
import { motion } from "framer-motion";

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
  }, [cards]);

  const renderCards = () =>
    cards &&
    cards.map((card, i) => (
      <Card
        key={i}
        cardId={card.cardId}
        cardFliped={card.fliped}
        cardImage={card.cardImage}
        cardMatched={card.matched}
      />
    ));

  return (
    <motion.div
      className="card-field"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {cards !== [] && renderCards()}
    </motion.div>
  );
};

export default CardField;
