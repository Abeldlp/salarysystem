import React from "react";
import "./App.css";
import Main from "./components/Main";
import AddWorkerInfo from "./components/AddWrokerInfo";
import Months from "./components/Months";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import PersonalInfo from "./components/PersonalInfo";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Months} />
          <Route path="/workers" exact component={Main} />
          <Route path="/workers/:id" component={PersonalInfo} />
          <Route path="/addworkerinfo" component={AddWorkerInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
