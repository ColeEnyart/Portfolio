import React from 'react';

const styles = {
  header: {
    background: '#6d1404',
    height: "15em",
    marginLeft: "15em",
  },
  h1: {
    margin: 0,
    paddingTop: "75px",
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
  },
}

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Home</h1>
    </header>
  );
}

export default Header;