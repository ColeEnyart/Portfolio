import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "0 1rem",
    cursor: "pointer",
  },
};

export default function Navigate() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/about">About</Link>
      <Link style={styles.link} to="/work">Work</Link>
      <Link style={styles.link} to="/contact">Contact</Link>
      <Link style={styles.link} to="/resume">Resume</Link>
    </nav>
  );
}
