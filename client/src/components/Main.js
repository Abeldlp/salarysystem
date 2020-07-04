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
      index: 0,
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*FETCH ALL THE WORKERS FROM THE DATABASE*/
  componentDidMount() {
    axios
      .get("/workers/")
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
        `/workers/filtered/${this.state.filteredWorker}`
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
        <h1 style={{ fontFamily: "Montserrat" }}>Workers</h1>

        {/*FORM TO FILTER A SEARCH*/}
        <form onSubmit={this.handleSubmit} style={{ marginBottom: "10px" }}>
          <input
            style={styles.input_style}
            type="text"
            placeholder="Find by Name"
            onChange={this.handleFilter}
            required
          />
          <input type="submit" value="Search" style={styles.addinfoButton} />
        </form>

        {/*BUTTON TO ADD NEW WORKERS INFO*/}
        <Link style={styles.addinfoButton} to="/addworkerinfo">
          Add new info
        </Link>

        <div style={styles.masterdiv}>
          {/*LIST OF WORKERS*/}
          <div>
            <h2>All transiactions</h2>
            {this.state.workers.map((worker) => (
              <div style={styles.link_div} key={worker._id}>
                <Link style={styles.month_link} to={`/workers/${worker._id}`}>
                  {index++} {worker.name} {worker.surname}
                </Link>
              </div>
            ))}
          </div>

          <br />
          <br />

          {/*FILTERED RESULTS*/}
          <div>
            <h2>Filter by name</h2>
            {this.state.dataFiltered.map((worker) => (
              <div style={styles.link_div} key={worker._id}>
                <Link style={styles.month_link} to={`/workers/${worker._id}`}>
                  {worker.name} {worker.surname} {worker.month}/{worker.year}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  input_style: {
    fontFamily: "Montserrat",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "18px",
    border: "1px solid black",
    outline: "none",
  },
  month_link: {
    fontFamily: "Source Sans Pro, sans-serif",
    color: "black",
    textDecoration: "none",
    borderBottom: "1px solid black",
  },
  masterdiv: {
    maxWidth: "50%",
    minWidth: "50%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  link_div: {
    textAlign: "left",
  },
  addinfoButton: {
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "10px",
    borderRadius: "18px",
    backgroundColor: "#333333",
    color: "white",
    textDecoration: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
};
