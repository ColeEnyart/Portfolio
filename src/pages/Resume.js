import React from "react";
import MyPDF from "../files/Cole Enyart Resume.pdf";

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#CFA5A5",
    margin: "1em",
    padding: "1em",
  },
  contain: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '1em',
    width: '50%',
  },
  group: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1em',
    width: '50%',
  },
  p: {
    textAlign: "center",
    fontSize: "2em",
  },
  skills: {
    margin: ".5em",
  }
};

function Resume() {
  return (
    <div style={styles.page}>
      <p style={styles.p}>Resume</p>
      <button>
        <a href={MyPDF} download="Cole Enyart Resume.pdf">
          Download Resume
        </a>
      </button>
      <h2 style={styles.skills}>My Skills</h2>
      <div style={styles.contain}>
        <div>
          <div>
            <p><b>Computer Science applied to JavaScript</b></p>
            <ul>
              <li>Algorithms (Searches, Sorts)</li>
              <li>Performance</li>
              <li>Time Complexity</li>
              <li>Big O Notation</li>
              <li>Data Structures</li>
            </ul>
          </div>
          <div>
            <p><b>Browser Based Technologies</b></p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript/jQuery</li>
              <li>Responsive Design</li>
              <li>Bootstrap</li>
              <li>Progressive Web Applications (PWAs)</li>
              <li>Local Storage, Session Storage, IndexedDB</li>
              <li>React.js</li>
            </ul>
          </div>
          <div>
            <p><b>Databases</b></p>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p><b>Server Side Development</b></p>
            <ul>
              <li>User Authentication</li>
              <li>Template Engines</li>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            </ul>
          </div>
          <div>
            <p><b>API Design</b></p>
            <ul>
              <li>Client-Server Model</li>
              <li>API</li>
              <li>Rest</li>
              <li>JSON</li>
              <li>AJAX (Fetch API)</li>
              <li>HTTP request methods</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <p><b>Deployment and Delivery</b></p>
            <ul>
              <li>Heroku</li>
              <li>Git</li>
              <li>GitHub Pages</li>
              <li>Shell Scripting</li>
              <li>Unit Testing</li>
              <li>Linting</li>
              <li>Continuous Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
