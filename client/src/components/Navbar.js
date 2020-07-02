import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div style={styles.navBar}>
        <Link style={styles.link} to="/">
          MONTHLY
        </Link>
        <Link style={styles.link} to="/workers">
          WORKERS
        </Link>
      </div>
    );
  }
}

const styles = {
  navBar: {
    backgroundColor: "black",
    padding: 20,
  },
  link: {
    textDecoration: "none",
    color: "white",
    margin: "0 10%",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
};
