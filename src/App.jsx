import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Searcher } from "./components/searcher";
function App() {
  return (
    <div className="App">
      <Searcher></Searcher>
    </div>
  );
}

export default App;
