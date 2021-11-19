import React from "react";
import About from "./About";
import Card from "./Card";
import Contact from "./Contact";
import Resume from "./Resume";
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

const styles = {
  navbar: {
    height: '30em',
    width: "15em",
    background: "#e8eaf6",
  },
  left: {

  },
};

function Navbar() {
  return (
    <Tab.Container style={styles.left} defaultActiveKey="first">
      <Row >
        <Col sm={3} style={styles.navbar}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <About />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Card />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Contact />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Resume />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Navbar;