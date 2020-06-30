import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
//import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
