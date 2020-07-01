import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: this.props.match.params.id,
      personInfo: [],
    };
    this.deletePerson = this.deletePerson.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/workers/${this.state.person}`)
      .then((response) => {
        this.setState({ personInfo: response.data });
      });
  }

  deletePerson() {
    axios
      .delete(`http://localhost:8000/workers/${this.state.person}`)
      .then((response) => console.log(response.data));

    window.location = "/workers";
  }
  render() {
    return (
      <div>
        <h1>Personal info</h1>

        <table>
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

        <table>
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

        <Link to="/workers">Back</Link>
        <br />
        <br />
        <button onClick={this.deletePerson}>Delete</button>
      </div>
    );
  }
}
