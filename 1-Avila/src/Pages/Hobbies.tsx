//import React from 'react'
import Stack from "react-bootstrap/Stack";
import { Row, Col, Container, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";

export default function Hobbies() {
  return (
    <>
      
      <Container fluid className="hobbies-body">
      <NavBar />
        <Row xs={1} md={2} className="hobbies-row">
          <Col className="hobbies-column">
              <Stack gap={3} className="first-column-stack">
                <h1 className="hobbies-heading">My Hobbies</h1>
                <Button variant="light" className="hobbies-button">First Hobby</Button>
                <Button variant="light" className="hobbies-button">Second Hobby</Button>
                <Button variant="light" className="hobbies-button">Third Hobby</Button>
                <Button variant="light" className="hobbies-button">Fourth Hobby</Button>
                <Button variant="light" className="hobbies-button">Fifth Hobby</Button>
              </Stack>
          </Col>
          <Col>
            <div className="hobbies-second-column">
              <Stack gap={3}>
                <h2 className="hobby-display">Hobby 1</h2>
                <h2 className="hobby-display">Hobby 2</h2>
                <h2 className="hobby-display">Hobby 3</h2>
                <h2 className="hobby-display">Hobby 4</h2>
                <h2 className="hobby-display">Hobby 5</h2>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
