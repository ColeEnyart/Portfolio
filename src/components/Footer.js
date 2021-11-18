import React from 'react';

const styles = {
  footer: {
    position: 'relative',
    bottom: 0,
    background: '#6d1404',
    height: "100px",
    width: "100%",
  },
  h1: {
    margin: 0,
    textAlign: "center",
    color: "white",
    fontSize: "3rem",
  },
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <h1 style={styles.h1}>Footer</h1>
    </footer>
  );
}

export default Footer;