import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button2 } from "./Button2";

export default function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="navbar-name">01-Avila</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Button2 label="Home" to="/" />
              <Button2 label="Hobbies" to="/hobbies" />
              <Button2 label="Calculator" to="/calculator" />
              <Button2 label="JSON" to="/json" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
