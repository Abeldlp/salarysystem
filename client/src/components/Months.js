import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import MonthDetail from "./MonthDetail";

export default class Months extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedWorkers: [],
      setName: "",
      setSurname: "",
      setYear: "",
    };
    //this.deployMonth = this.deployMonth.bind(this);
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
  /*
  deployMonth(e) {
    this.setState({
      setName: e.target.name,
      setSurname: e.target.surname,
      setYear: e.target.year,
    });
  }
    */
  render() {
    return (
      <div>
        <h1 style={{ fontFamily: "Montserrat" }}>Months</h1>

        {/*BUTTON TO ADD NEW WORKERS INFO*/}
        <Link style={styles.addinfoButton} to="/addworkerinfo">
          Add new info
        </Link>

        <div style={styles.list_of_months}>
          <div style={styles.month_box}>
            <p style={styles.month_name}>January</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 1) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>February</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 2) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>March</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 3) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>April</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 4) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>May</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 5) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>June</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 6) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>July</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 7) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>August</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 8) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>September</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 9) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>October</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 10) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>November</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 11) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
                      {worker.surname} {worker.name}/ {worker.year}
                    </Link>
                  </div>
                );
              }
            })}
          </div>
          <br />
          <div style={styles.month_box}>
            <p style={styles.month_name}>December</p>
            {this.state.fetchedWorkers.map((worker) => {
              if (worker.month === 12) {
                return (
                  <div key={worker._id}>
                    <Link
                      style={styles.month_link}
                      to={`/workers/${worker._id}`}
                    >
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
        {/* 
        <MonthDetail
          name={this.state.setName}
          surname={this.state.setSurname}
          year={this.state.setYear}
        />
        */}
      </div>
    );
  }
}

const styles = {
  list_of_months: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  },
  month_box: {
    padding: 10,
    margin: 10,
    width: "30%",
    borderRadius: "18px",
    paddingBottom: "20px",
    backgroundColor: "whitesmoke",
    boxShadow: "0px 5px 10px 2px lightgrey",
  },
  month_name: {
    fontFamily: "Montserrat, sans-serif",
    color: "black",
    fontWeight: "bold",
  },
  month_link: {
    fontFamily: "Source Sans Pro. sans-serif",
    color: "black",
    textDecoration: "none",
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
  },
};
