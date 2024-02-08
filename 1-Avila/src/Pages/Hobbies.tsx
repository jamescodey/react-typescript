//import React from 'react'
import { Container, Button, Stack, Row } from "react-bootstrap";
import NavBar from "../Components/NavBar";

export default function Hobbies() {
  // Function to handle scrolling to specific sections
  const handleClick = (target: string) => {
    const targetDiv: HTMLElement | null = document.getElementById(target);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fade-in">
        <NavBar /> 
        <Container fluid className="app-container"> {/* Container for the app */}
          <Row xs={1} md={2}>
            {/* Sidebar section */}
            <aside className="sidebar">
              <Stack>
                {/* Sidebar heading */}
                <h1
                  className="sidebar-heading"
                  onClick={() => handleClick("landing")}
                >
                  私の趣味
                </h1>
                {/* Buttons for navigating to different sections */}
                <Button
                  variant="light"
                  className="side-button"
                  onClick={() => handleClick("Books")}
                >
                  Books
                </Button>
                <Button
                  variant="light"
                  className="side-button"
                  onClick={() => handleClick("Music")}
                >
                  Music
                </Button>
                <Button
                  variant="light"
                  className="side-button"
                  onClick={() => handleClick("Arts")}
                >
                  Arts
                </Button>
                <Button
                  variant="light"
                  className="side-button"
                  onClick={() => handleClick("Sports")}
                >
                  Sports
                </Button>
                <Button
                  variant="light"
                  className="side-button"
                  onClick={() => handleClick("Games")}
                >
                  Games
                </Button>
              </Stack>
            </aside>
            {/* Main content section */}
            <main className="content">
              {/* Content for displaying hobbies */}
              <div className="hobbies-content">
                <Stack>
                  {/* Section for landing */}
                  <div className="hobbies-content-div" id="landing">
                    <div>
                      <h1>My Hobbies</h1>
                    </div>
                  </div>
                  {/* Section for Books */}
                  <div className="hobbies-content-div" id="Books">
                    <h4>
                      Reading
                      <br /> Self-help
                      <br /> Books
                    </h4>
                    {/* Image for Books */}
                    <img
                      className="hobby-image"
                      src="/images/reading.png"
                    ></img>
                  </div>
                  {/* Section for Music */}
                  <div className="hobbies-content-div" id="Music">
                    <h4>
                      Listening
                      <br />
                      to music
                      <br />
                      and playing
                      <br />
                      instruments
                    </h4>
                    {/* Image for Music */}
                    <img className="hobby-image" src="/images/music.png"></img>
                  </div>
                  {/* Section for Arts */}
                  <div className="hobbies-content-div" id="Arts">
                    <h4>
                      Making
                      <br />
                      digital and
                      <br />
                      graphite
                      <br />
                      portraits
                    </h4>
                    {/* Image for Arts */}
                    <img className="hobby-image" src="/images/arts.png"></img>
                  </div>
                  {/* Section for Sports */}
                  <div className="hobbies-content-div" id="Sports">
                    <h4>
                      Used to
                      <br />
                      play sports.
                      <br />
                      Now, just
                      <br />
                      watching
                    </h4>
                    {/* Image for Sports */}
                    <img className="hobby-image" src="/images/sports.png"></img>
                  </div>
                  {/* Section for Games */}
                  <div className="hobbies-content-div" id="Games">
                    <h4>
                      Computer,
                      <br />
                      mobile,
                      <br />
                      and board,
                      <br />
                      games
                    </h4>
                    {/* Image for Games */}
                    <img className="hobby-image" src="/images/games.png"></img>
                  </div>
                </Stack>
              </div>
            </main>
          </Row>
        </Container>
      </div>
    </>
  );
}
