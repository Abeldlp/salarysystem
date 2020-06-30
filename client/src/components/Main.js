import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import PersonalInfo from "./PersonalInfo";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/workers/")
      .then((response) => {
        this.setState({ workers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let index = 0;
    return (
      <div>
        <h1>Workers</h1>
        {this.state.workers.map((worker) => (
          <div key={worker.name + 1}>
            <Link to={`/worker/${worker.name}${worker.surname}`}>
              {index++} {worker.name} {worker.surname}
            </Link>

            {/*!FIX FROM HERE!!!!!!!!!!!!! Trying to set up a route for each worker of the list*/}
            <Route
              to={`/worker/${worker.name}${worker.surname}`}
              component={PersonalInfo}
            >
              <PersonalInfo
                surname={worker.surname}
                name={worker.name}
                month={worker.month}
                year={worker.year}
                income={worker.income}
              />
            </Route>
            {/*!FIX TILL HERE!!!!!!!!!!!!!*/}
          </div>
        ))}
        <p>add</p>
      </div>
    );
  }
}
