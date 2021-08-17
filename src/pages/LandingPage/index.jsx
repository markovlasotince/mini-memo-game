import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// style
import "./landingPage.scss";

// actions
import { setGameFieldSize, setUsername } from "../../store/actions/gameplay";

const LandingPage = () => {
  const dispatch = useDispatch();
  const [username, handleUsernameInput] = useState("Mini warrior");
  const [level, setLevel] = useState(null);

  const setGameLevel = (level) => {
    setLevel(level);
    console.log(username);
    dispatch(setUsername(username));
    dispatch(setGameFieldSize(level));
  };

  return (
    <div className="memo-game-landing">
      <motion.div
        className="intro-message-wrapper"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
      >
        <h1 className="intro-message">Welcome to my mini memo game</h1>
        {!level && (
          <h6 className="level-message">
            *Please add username and select difficulty level
          </h6>
        )}
        {!level && (
          <motion.input
          whileHover={{ scale: 1.1 }}
            type="text"
            name="username"
            value={username}
            className="username-field"
            onClick={() => handleUsernameInput("")}
            onChange={(e) => handleUsernameInput(e.target.value)}
            maxLength={15}
          />
        )}
        {!level ? (
          <div className="choose-level-buttons">
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="game-level"
              onClick={() => setGameLevel(4)}
            >
              Easy
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="game-level"
              onClick={() => setGameLevel(5)}
            >
              Medium
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="game-level"
              onClick={() => setGameLevel(10)}
            >
              Hard
            </motion.span>
          </div>
        ) : (
          <motion.div className="play-button" whileHover={{ scale: 1.1 }}>
            <Link to="/play">Click here to play</Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
export default LandingPage;
