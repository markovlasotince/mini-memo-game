import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

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

  const variants = {
    flipToImage: { rotateY: -180, duration: 0.5 },
    flipToBackground: { rotateY: 0, duration: 0.5 },
  };

  return cardMatched ? (
    <div className="card-wrapper">
      <p className="matched-card">{cardImage}</p>
    </div>
  ) : (
    <motion.div
      className="card-wrapper"
      onClick={() => card && !cardFliped && dispatch(flipCard(cards, cardId))}
      whileHover={{ scale: 1.1 }}
      animate={cardFliped ? "flipToImage" : "flipToBackground"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {cardFliped ? (
        <motion.p
          className="card-image"
          initial={{ opacity: 0 }}
          animate={{ rotateY: 180, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {cardImage}
        </motion.p>
      ) : (
        <p className="card-background">Flip me!</p>
      )}
    </motion.div>
  );
};

export default Card;
