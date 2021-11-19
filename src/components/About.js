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
      <p>It is my dream to become a developer. I'm taking my first steps towards accomplishing my dream.</p>
    </div>
  );
}

export default About;
