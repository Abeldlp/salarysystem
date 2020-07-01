import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
      filteredWorker: "",
      dataFiltered: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*FETCH ALL THE WORKERS FROM THE DATABASE*/
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

  /*HANDLE SUBMIT FORM TO FILTER PER NAME */
  handleFilter(e) {
    this.setState({ filteredWorker: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        `http://localhost:8000/workers/filtered/${this.state.filteredWorker}`
      )
      .then((response) => {
        this.setState({
          dataFiltered: response.data,
        });
      });
  }

  render() {
    let index = 0;
    return (
      <div>
        <h1>Workers</h1>

        {/*FORM TO FILTER A SEARCH*/}
        <Link to="/">Monthly</Link>

        {/*FORM TO FILTER A SEARCH*/}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Find by Name"
            onChange={this.handleFilter}
            required
          />
        </form>

        {/*LIST OF WORKERS*/}
        {this.state.workers.map((worker) => (
          <div key={worker.name + 1}>
            <Link to={`/workers/${worker._id}`}>
              {index++} {worker.name} {worker.surname}
            </Link>
          </div>
        ))}
        <br />
        <br />

        {/*BUTTON TO ADD NEW WORKERS INFO*/}
        <Link to="/addworkerinfo">Add new info</Link>

        {/*FILTERED RESULTS*/}
        <h2>Filter results</h2>
        {this.state.dataFiltered.map((worker) => (
          <div key={worker._id + 1}>
            <Link to={`/workers/${worker._id}`}>
              {worker.name} {worker.surname} {worker.month}/{worker.year}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
