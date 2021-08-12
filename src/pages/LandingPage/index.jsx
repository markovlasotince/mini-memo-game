import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h5>Welcome to landing page</h5>
      <Link to="/play">Click here to play</Link>
    </div>
  );
};
export default LandingPage;
