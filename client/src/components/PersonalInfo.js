import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: this.props.match.params.id,
      personInfo: [],
      newSurname: "",
      newName: "",
      newMonth: "",
      newYear: "",
      newIncome: "",
    };
    this.deletePerson = this.deletePerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.handleSurname = this.handleSurname.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleIncome = this.handleIncome.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/workers/${this.state.person}`)
      .then((response) => {
        this.setState({ personInfo: response.data });
      });
  }

  //HANDLE CHANGES TO THE UPDATE FORM
  handleSurname(e) {
    this.setState({
      newSurname: e.target.value,
    });
  }

  handleName(e) {
    this.setState({
      newName: e.target.value,
    });
  }

  handleMonth(e) {
    this.setState({
      newMonth: e.target.value,
    });
  }

  handleYear(e) {
    this.setState({
      newYear: e.target.value,
    });
  }

  handleIncome(e) {
    this.setState({
      newIncome: e.target.value,
    });
  }

  deletePerson() {
    axios
      .delete(`http://localhost:8000/workers/${this.state.person}`)
      .then((response) => console.log(response.data));

    window.location = "/workers";
  }

  updatePerson(e) {
    e.preventDefault();

    const newData = {
      surname: this.state.newSurname,
      name: this.state.newName,
      month: this.state.newMonth,
      year: this.state.newYear,
      income: this.state.newIncome,
    };

    axios
      .post(
        `http://localhost:8000/workers/update/${this.state.person}`,
        newData
      )
      .then((response) => console.log(response.data));

    window.location = `/workers/${this.state.person}`;
  }
  render() {
    return (
      <div>
        <h1>Personal info</h1>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Surname</th>
              <th>Name</th>
              <th>Month</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.personInfo.surname}</td>
              <td>{this.state.personInfo.name}</td>
              <td>{this.state.personInfo.month}</td>
              <td>{this.state.personInfo.year}</td>
            </tr>
          </tbody>
        </table>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Income (gross)</th>
              <th>Taxes (8%)</th>
              <th>Social security fee(2%)</th>
              <th>Income (net)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.personInfo.income}€</td>
              <td>{(this.state.personInfo.income * 8) / 100}€</td>
              <td>{(this.state.personInfo.income * 2) / 100}€</td>
              <td>
                {this.state.personInfo.income -
                  (this.state.personInfo.income * 8) / 100 -
                  (this.state.personInfo.income * 2) / 100}
                €
              </td>
            </tr>
          </tbody>
        </table>

        <Link style={styles.backbutton} to="/">
          Back to months
        </Link>
        <Link style={styles.backbutton} to="/workers">
          Back to workers
        </Link>
        <br />
        <br />
        <button style={styles.backbutton} onClick={this.deletePerson}>
          Delete
        </button>
        <button style={styles.backbutton}>Update</button>

        <div>
          <form onSubmit={this.updatePerson}>
            <input
              style={styles.input_style}
              type="text"
              placeholder="Surname"
              required
              onChange={this.handleSurname}
            />
            <input
              style={styles.input_style}
              type="text"
              placeholder="Name"
              required
              onChange={this.handleName}
            />
            <input
              style={styles.input_style}
              type="number"
              placeholder="Month (Specify with a number)"
              required
              onChange={this.handleMonth}
            />
            <input
              style={styles.input_style}
              type="year"
              placeholder="Year"
              required
              onChange={this.handleYear}
            />
            <input
              style={styles.input_style}
              type="income"
              placeholder="Income ammount"
              required
              onChange={this.handleIncome}
            />
            <input type="submit" vale="Send" />
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  table: {
    border: "1px solid black",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "18px",
  },
  backbutton: {
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "10px",
    borderRadius: "18px",
    backgroundColor: "#333333",
    color: "white",
    textDecoration: "none",
    margin: "30px",
    outline: "none",
  },
  input_style: {
    fontFamily: "Montserrat",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "18px",
    border: "1px solid black",
    outline: "none",
  },
};
