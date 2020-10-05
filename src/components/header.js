import React from "react";
import { Link } from "react-router-dom";
import menuIcon from "../image/menuIcon.png";
function Header() {
  return (
    <header>
      <Link to="/">
        <img src={menuIcon} width="15"></img>
      </Link>
      <Link to="/">
        <span id="siteTitle">COOKInEveryone</span>
      </Link>
    </header>
  );
}

export default Header;
