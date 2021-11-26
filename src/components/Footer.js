import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    background: '#6d1404',
    height: "5em",
    width: "100%",
  },
  div: {
    height: "4em",
  },
  link: {
    color: "white",
    fontSize: "2em",
  },
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.div}>
        <a href='https://github.com/ColeEnyart' target='_blank' rel='noreferrer' style={styles.link}>GitHub</a>
      </div>
      <div style={styles.div}>
        <a href='https://www.linkedin.com/in/cole-enyart-a233b31b5/' target='_blank' rel='noreferrer' style={styles.link}>Linked In</a>
      </div>
      <div style={styles.div}>
        <a href='https://stackoverflow.com/users/16801364/cole-enyart' target='_blank' rel='noreferrer' style={styles.link}>Stack Overflow</a>
      </div>
    </footer>
  );
}

export default Footer;