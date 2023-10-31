import React from "react";
import "./style.scss";

import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="main_container">
      <Navbar />
      <Main />
    </div>
  );
}
