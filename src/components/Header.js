import React from 'react';
import { Link } from 'react-router-dom';
import Navigate from './Navigate';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#8A6B6B',
    height: "10em",
  },
  h1: {
    margin: 0,
    paddingTop: "1em",
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
  },
}

function Header() {
  return (
    <header style={styles.header}>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1 style={styles.h1}>Cole Enyart</h1>
      </Link>
      <Navigate />
    </header>
  );
}

export default Header;