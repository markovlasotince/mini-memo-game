import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => (
  <div className="header-wrapper">
    <Link to="/">MiniGame</Link>
  </div>
);

export default Header;
