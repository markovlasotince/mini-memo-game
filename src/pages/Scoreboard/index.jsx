import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

// styles
import "./scoreBoard.scss";

// actions
import {
  initGameAction,
  resetState,
  setScore,
  getScoreFromLocalStorage,
} from "../../store/actions/gameplay";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const {
    cardFieldSize,
    totalNumberOfClicks,
    matchedCards,
    loadingScore,
    username,
  } = useSelector((state) => state.gameplay);

  useEffect(() => {
    dispatch(setScore(cardFieldSize, totalNumberOfClicks, username));
  }, []);

  const resetGame = () => {
    dispatch(initGameAction(cardFieldSize));
    dispatch(resetState());
    history.push("/");
  };

  const showScores = () => {
    let score = getScoreFromLocalStorage();

    if (!score) {
      return <h3>Still no SCOREBOARD:</h3>;
    }

    return (
      score[cardFieldSize] && (
        <table>
          <tbody>
            <tr className="score-data bold">
              <td>name</td>
              <td>score</td>
            </tr>
            {score[cardFieldSize].map((scoreData, i) => (
              <tr className="score-data" key={i}>
                <td>
                  <h5>{scoreData.username}</h5>
                </td>
                <td>
                  <h5>{scoreData.score}</h5>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    );
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
          You played on field size -{" "}
          <span>{cardFieldSize && cardFieldSize * 2}</span>
        </p>
        <p>
          You clicked - <span>{totalNumberOfClicks}</span> times
        </p>
      </div>
      <div className="all-scores-table">
        {loadingScore ? (
          <p>LOADING SCORES...</p>
        ) : (
          <>
            <h3>CURRENT SCOREBOARD:</h3>
            <span className="small">*only for previously played level</span>
            {showScores()}
          </>
        )}
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
