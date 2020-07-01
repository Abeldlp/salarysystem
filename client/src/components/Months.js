import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MonthDetail from "./MonthDetail";

export default class Months extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedWorkers: [],
      setName: "",
      setSurname: "",
      setYear: "",
    };
    this.deployMonth = this.deployMonth.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/workers/")
      .then((response) => {
        this.setState({ fetchedWorkers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //!TO DOUBLE CHECK SECTION AT THE BOTTOM
  deployMonth(e) {
    this.setState({
      setName: e.target.name,
      setSurname: e.target.surname,
      setYear: e.target.year,
    });
  }

  render() {
    return (
      <div>
        <h1>Month</h1>
        <Link to="/workers">Workers</Link>
        <div style={styles.list_of_months}>
          <div style={styles.month_box}>
            <p>January</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 1) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>February</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 2) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>March</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 3) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>April</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 4) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>May</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 5) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>June</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 6) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>July</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 7) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>August</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 8) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>September</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 9) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>October</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 10) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>November</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 11) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p>December</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 12) {
                return (
                  <div>
                    <Link to={`/workers/${worker._id}`}>
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
        </div>
        {/*!!!!Make dynamic show per month*/}
        <MonthDetail
          name={this.state.setName}
          surname={this.state.setSurname}
          year={this.state.setYear}
        />
      </div>
    );
  }
}

const styles = {
  list_of_months: {
    display: "flex",
    flexWrap: "wrap"
  },
  month_box: {
    padding: 10,
    margin: 10,
    border: "1px solid black",
    width: "30%",
    borderRadius: "18px",
  },
};
