//import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CardProps {
  CardHeading: string;
  CardText: string;
  CardImage: string;
  ButtonLabel: string;
  to: string;
}

export const AppCard: FC<CardProps> = ({
  CardHeading,
  CardText,
  CardImage,
  to,
  ButtonLabel,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(to);
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Card
        style={{ width: "20rem" }}
        className="card-div"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img variant="top" src={CardImage} className="card-image" />
        <Card.Body className="card-body">
          <Card.Title>{CardHeading}</Card.Title>
          <Card.Text>{CardText}</Card.Text>
          <Button variant={isHovered ? "light" : "outline-dark"}>
            {ButtonLabel}
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
};
