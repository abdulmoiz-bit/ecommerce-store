import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="signup-container">
    <div className="SignUp">
      <Form onSubmit={handleSubmit}>
        <Form.Group  size="lg" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
          />
        </Form.Group>
        <Form.Group className="mt-3" size="lg" controlId="email">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-3" size="lg" controlId="password">
          <Form.Label>Your Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-outline-dark my-3"  type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </div>
    </div>
  );
}
