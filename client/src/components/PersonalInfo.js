import React, { Component } from "react";

export default class PersonalInfo extends Component {

  render() {
    return (
      <div>
        <p>surname {this.props.surname}</p>
        <p>name {this.props.name}</p>
        <p>month {this.props.month}</p>
        <p>year {this.props.year}</p>
        <p>income {this.props.income}</p>
      </div>
    );
  }
}
