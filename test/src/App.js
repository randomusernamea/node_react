import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainComp from "./comps/MainComp";
import TopComp from "./comps/TopComp"

function App() {
  return (
    <div id="AppMainDiv">
      <TopComp />
      <MainComp />
    </div>
  );
}

export default App;
