import React, { Component } from "react";

export default class MonthDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.name} {this.props.surname} {this.props.year}
        </p>
      </div>
    );
  }
}
