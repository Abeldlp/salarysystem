import React, { Component } from "react";
import axios from "axios";

export default class AddWrokerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: "",
      name: "",
      month: "",
      year: "",
      income: "",
    };

    this.handleSurname = this.handleSurname.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleMonth(e) {
    this.setState({
      month: e.target.value,
    });
  }

  handleYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  handleIncome(e) {
    this.setState({
      income: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const person = {
      surname: this.state.surname,
      name: this.state.name,
      month: this.state.month,
      year: this.state.year,
      income: this.state.income,
    };

    axios
      .post("http://localhost:8000/workers/add", person)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h1>Add info</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Surname"
            onChange={this.handleSurname}
            required
            style={styles.input_style}
          />
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleName}
            required
            style={styles.input_style}
          />
          <input
            type="number"
            placeholder="Month"
            min="1"
            max="12"
            onChange={this.handleMonth}
            required
            style={styles.input_style}
          />
          <input
            type="number"
            placeholder="Year"
            min="1991"
            max="2020"
            onChange={this.handleYear}
            required
            style={styles.input_style}
          />
          <input
            type="number"
            placeholder="Income"
            onChange={this.handleIncome}
            required
            style={styles.input_style}
          />
          <input type="submit" value="ADD" style={styles.updateButton} />
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
    margin: "auto",
  },
  input_style: {
    fontFamily: "Montserrat",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "18px",
    border: "1px solid black",
    outline: "none",
  },
  updateButton: {
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "10px",
    borderRadius: "18px",
    backgroundColor: "dodgerblue",
    color: "white",
    textDecoration: "none",
    margin: "30px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
};
