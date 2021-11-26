import React from "react";
import Me from "../images/me.jpg";

const styles = {
  column: {
    display: "flex",
    flexDirection: "column",
    background: "#CFA5A5",
    margin: "1em",
    padding: "1em",
  },
  img: {
    height: '15em',
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
  },
  p: {
    textAlign: "center",
    fontSize: "2em",
  },
}

function About() {
  return (
    <div style={styles.column}>
      <p style={styles.p}>About</p>
      <div style={styles.row}>
        <div>
          <img style={styles.img} src={Me} alt="Cole Enyart Portrait"></img>
        </div>
        <div>
          <h2>Cole Enyart</h2>
          <p>It is my dream to become a developer. I'm taking my first steps towards accomplishing my dream.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
