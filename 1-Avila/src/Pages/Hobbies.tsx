//import React from 'react'
import { Container, Button, Stack, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";

export default function Hobbies() {

  const handleClick = (target: string) => {
    const targetDiv:HTMLElement | null = document.getElementById(target);

    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar />
      <Container fluid className="app-container">
        <Row xs={1} md={2}>
          <aside className="sidebar">
            <Stack>
              <h1 className="sidebar-heading" onClick={() => handleClick('landing')}>私の趣味</h1>
              <Button variant="light" className="side-button" onClick={() => handleClick('firstHobby')}>
                Reading
              </Button>
              <Button variant="light" className="side-button" onClick={() => handleClick('secondHobby')}>
                Instruments
              </Button>
              <Button variant="light" className="side-button" onClick={() => handleClick('thirdHobby')}>
                Sports
              </Button>
              <Button variant="light" className="side-button" onClick={() => handleClick('fourthHobby')}>
                Computer Games
              </Button>
            </Stack>
          </aside>
          <main className="content">
            <div className="hobbies-content">
              <Stack>
                <div className="hobbies-content-div" id="landing">
                  <p>This is your main content.</p>
                </div>
                <div className="hobbies-content-div" id="firstHobby">
                  <p>This is your main content.</p>
                </div>
                <div className="hobbies-content-div" id="secondHobby">
                  <p>This is your main content.</p>
                </div>
                <div className="hobbies-content-div" id="thirdHobby">
                  <p>This is your main content.</p>
                </div>
                <div className="hobbies-content-div" id="fourthHobby">
                  <p>This is your main content.</p>
                </div>
              </Stack>
            </div>
          </main>
        </Row>
      </Container>
    </>
  );
}
