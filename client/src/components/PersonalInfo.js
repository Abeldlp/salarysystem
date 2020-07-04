import React, { Component } from "react";
import axios from "axios";


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
    //Delete and Update funtions
    this.deletePerson = this.deletePerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);

    //Functions to handle changes to the Persons information
    this.handleSurname = this.handleSurname.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleIncome = this.handleIncome.bind(this);

    //Function to show update form
    this.showUpdate = this.showUpdate.bind(this);
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/workers/${this.state.person}`)
      .then((response) => {
        this.setState({
          personInfo: response.data,
          newSurname: response.data.surname,
          newName: response.data.name,
          newMonth: response.data.month,
          newYear: response.data.year,
          newIncome: response.data.income,
        });
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

  //FUNCTION TO SHOW THE UPDATE METHOD
  showUpdate() {
    const form = document.querySelector(".form-style");

    form.style.opacity = 1;
    form.style.pointerEvents = "auto";
    form.style.zIndex = 1;
  }

  deletePerson() {
    let confirmed = window.confirm(
      "Are you sure you want to delete this information?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:8000/workers/${this.state.person}`)
        .then((response) => console.log(response.data));

      window.location = "/workers";
    } else {
      window.location = `/workers/${this.state.person}`;
    }
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
        <h1 style={{ fontFamily: "Montserrat" }}>Personal info</h1>

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

        <h4 style={{ fontFamily: "Source sans pro" }}>This month</h4>
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

        <h4 style={{ fontFamily: "Source sans pro" }}>Yearly aprox.</h4>
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
              <td>{this.state.personInfo.income * 12}€</td>
              <td>{(this.state.personInfo.income * 12 * 8) / 100}€</td>
              <td>{(this.state.personInfo.income * 12 * 2) / 100}€</td>
              <td>
                {this.state.personInfo.income * 12 -
                  (this.state.personInfo.income * 12 * 8) / 100 -
                  (this.state.personInfo.income * 12 * 2) / 100}
                €
              </td>
            </tr>
          </tbody>
        </table>
        {/* 
          <Link style={styles.backbutton} to="/">
          Back to months
        </Link>
        <Link style={styles.backbutton} to="/workers">
          Back to workers
        </Link>
        */}

        <button style={styles.deleteButton} onClick={this.deletePerson}>
          Delete
        </button>
        <button style={styles.updateButton} onClick={this.showUpdate}>
          Update
        </button>

        <div>
          <form
            onSubmit={this.updatePerson}
            className="form-style"
            style={styles.form}
          >
            <label htmlFor="surname" style={styles.label}>
              Surname
            </label>
            <input
              style={styles.input_style}
              type="text"
              name="surname"
              placeholder="Surname"
              value={this.state.newSurname}
              required
              onChange={this.handleSurname}
            />
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <input
              style={styles.input_style}
              type="text"
              name="name"
              placeholder="Name"
              required
              value={this.state.newName}
              onChange={this.handleName}
            />
            <label htmlFor="month" style={styles.label}>
              Month
            </label>
            <input
              style={styles.input_style}
              type="number"
              name="month"
              placeholder="Month (Specify with a number)"
              required
              value={this.state.newMonth}
              onChange={this.handleMonth}
            />
            <label htmlFor="year" style={styles.label}>
              Year
            </label>
            <input
              style={styles.input_style}
              type="number"
              name="year"
              placeholder="Year"
              required
              value={this.state.newYear}
              onChange={this.handleYear}
            />
            <label htmlFor="income" style={styles.label}>
              Income
            </label>
            <input
              style={styles.input_style}
              type="number"
              name="income"
              placeholder="Income ammount"
              required
              value={this.state.newIncome}
              onChange={this.handleIncome}
            />
            <input
              style={styles.updateButton}
              type="submit"
              value="Update info"
            />
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  table: {
    border: "1px solid black",
    margin: "auto",
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
  },
  input_style: {
    fontFamily: "Montserrat",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "18px",
    border: "1px solid black",
    outline: "none",
  },
  deleteButton: {
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    letterSpacing: "1px",
    padding: "10px",
    borderRadius: "18px",
    backgroundColor: "tomato",
    color: "white",
    textDecoration: "none",
    margin: "30px",
    border: "none",
    outline: "none",
    cursor: "pointer",
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
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    opacity: 0,
    transition: "all ease-in-out 0.5s",
    position: "fixed",
    margin: "auto",
    top: "15%",
    left: "25%",
    right: "25%",
    pointerEvents: "none",
    backgroundColor: "whitesmoke",
    boxShadow: "0px 15px 20px 4px grey",
    padding: "20px",
    zIndex: -1,
    borderRadius: "18px",
  },
  label: {
    fontFamily: "Montserrat",
    textAlign: "left",
    fontWeight: "bold",
    paddingLeft: "10px",
    paddingBottom: "3px",
  },
};
