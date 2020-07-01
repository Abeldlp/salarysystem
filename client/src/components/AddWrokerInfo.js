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
    window.location = "/workers";
  }

  render() {
    return (
      <div>
        <h1>Add info</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Surname"
            onChange={this.handleSurname}
          />
          <input type="text" placeholder="Name" onChange={this.handleName} />
          <input
            type="number"
            placeholder="Month"
            onChange={this.handleMonth}
          />
          <input type="number" placeholder="Year" onChange={this.handleYear} />
          <input
            type="number"
            placeholder="Income"
            onChange={this.handleIncome}
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}
