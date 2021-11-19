import React from "react";
import Me from "./images/me.jpg";

const styles = {
  div: {
    height: '20em',
  },
  img: {
    height: '15em',
  },
}

function About() {
  return (
    <div style={styles.div}>
      <img style={styles.img} src={Me} alt="Cole Enyart Portrait"></img>
      <h2>Cole Enyart</h2>
      <p>Hello I am learning to be a developer</p>
    </div>
  );
}

export default About;
