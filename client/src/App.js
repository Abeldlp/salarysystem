import React from "react";
import "./App.css";
import Main from "./components/Main";
import AddWorkerInfo from "./components/AddWrokerInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import PersonalInfo from "./components/PersonalInfo";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/workers" exact component={Main} />
          <Route path="/workers/:id" component={PersonalInfo} />
          <Route path="/addworkerinfo" component={AddWorkerInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
