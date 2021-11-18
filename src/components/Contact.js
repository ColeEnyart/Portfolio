import React, { useState } from "react";
import Form from "react-bootstrap/Form";
/* import FormControl from "react-bootstrap/FormControl"; */
import Button from "react-bootstrap/Button";

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="form.Name">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="name@example.com" />
{/*         <Form.Control.Feedback>Please provide a email</Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="form.Textarea">
        <Form.Label>Comment</Form.Label>
        <Form.Control required as="textarea" rows={3} />
{/*         <Form.Control.Feedback>Please provide a message</Form.Control.Feedback> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
