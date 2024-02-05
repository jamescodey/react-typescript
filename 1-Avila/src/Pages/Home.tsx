import { Heading } from "../Components/Heading";
import { Paragraph } from "../Components/Paragraph";
import { Button1 } from "../Components/Button1";
import { AppCard } from "../Components/AppCard";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="fade-in">
      <Container fluid>
        <Stack gap={2} className="p-4">
          <Heading heading="ディジタルトゥランスフォルメイション" />
          <Paragraph content="こんにちは！ This digital transformation is brought to you by James Coby Avila." />
          <Button1 label="Take a look at my hobbies" to="/hobbies" />
          <Row xs={1} md={2} className="g-3">
            <Col className="card-col">
              <AppCard
                CardHeading="Calculator"
                CardText="This is my Calculator App."
                CardImage="/images/Calculator-image.jpg"
                ButtonLabel="View Calculator Page"
                to="/calculator"
              />
            </Col>
            <Col className="card-col">
              <AppCard
                CardHeading="JSON"
                CardText="This is my JSON file example."
                CardImage="/images/JSON-image.png"
                ButtonLabel="View JSON Page"
                to="/json"
              />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
