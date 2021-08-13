import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

// styles
import "./scoreBoard.scss";
import { initGameAction, resetState } from "../../store/actions/gameplay";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { cardFieldSize, totalNumberOfClicks, matchedCards } = useSelector(
    (state) => state.gameplay
  );

  const resetGame = () => {
    dispatch(initGameAction(cardFieldSize));
    dispatch(resetState());
    history.push("/");
  };

  // mini "guard" to make score available only when game is finished :)
  return matchedCards &&
    cardFieldSize === 0 &&
    matchedCards.length === cardFieldSize * 2 ? (
    <Redirect to="/" />
  ) : (
    <div className="scoreboard-page">
      <h1 className="m-1">Congratulations!</h1>
      <h2 className="m-1"> You have succesfully finished the game.</h2>
      <h3 className="m-1">This are your scores:</h3>
      <div className="game-scores">
        <p>
          You played on field size - <span>{cardFieldSize * 2}</span>
        </p>
        <p>
          You clicked - <span>{totalNumberOfClicks}</span> times
        </p>
      </div>
      <motion.div
        className="return-to-home-page"
        onClick={() => resetGame()}
        whileHover={{ scale: 1.1 }}
      >
        <span>Go to home page</span>
      </motion.div>
    </div>
  );
};
export default ScoreBoard;
