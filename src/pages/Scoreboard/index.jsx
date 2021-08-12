import React from "react";
import { Link } from "react-router-dom";

const ScoreBoard = () => {
  return (
    <div>
      <h5>Welcome to Scoreboard page</h5>
      <h6>Show game scores</h6>
      <Link to="/">Go to home page</Link>
    </div>
  );
};
export default ScoreBoard;
