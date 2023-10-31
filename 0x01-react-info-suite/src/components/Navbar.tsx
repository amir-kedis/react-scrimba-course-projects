import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__container container">
        <img
          src="./assets/reactjs-icon.svg"
          alt="react-js-icon"
          className="nav__logo"
        />
        <h2 className="nav__title">ReactFacts</h2>
        <span className="nav__info">React Course - Project 1</span>
      </div>
    </nav>
  );
}
