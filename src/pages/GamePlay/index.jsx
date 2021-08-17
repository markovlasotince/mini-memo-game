import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

// style
import "./gamePlay.scss";

// actions
import { initGameAction } from "../../store/actions/gameplay";

// components
import CardField from "../../components/CardField";
import Header from "../../components/Header";

const GamePlay = () => {
  const dispatch = useDispatch();
  const { cardFieldSize, matchedCards, cards } = useSelector(
    (state) => state.gameplay
  );

  useEffect(() => {
    dispatch(initGameAction(cardFieldSize));
  }, [initGameAction]);

  return (
    <div className="game-play-page">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <Header />
      </motion.div>
      <motion.h1
        className="game-play-welcome-message"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        Flip cards and match numbers ...
      </motion.h1>
      <div className="card-field-wrapper">
        <CardField />
      </div>
      {matchedCards &&
      cardFieldSize &&
      matchedCards.length / 2 === cardFieldSize ? (
        <Redirect to="/score" />
      ) : null}
      {cards && cards.length === 0 ? <Redirect to="/" /> : null}
    </div>
  );
};

export default GamePlay;
