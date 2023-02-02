import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainComp from "./comps/mainComp";
import TopComp from "./comps/topComp"

function App() {
  return (
    <div id="AppMainDiv">
      <TopComp />
      <MainComp />
    </div>
  );
}

export default App;
