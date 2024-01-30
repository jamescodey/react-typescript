//import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface ButtonProps {
  label: string;
  to: string;
}

export const Button2: FC<ButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(to);
  };
  return (
    <div className="button-div">
      <Button
        className="button2"
        variant={location.pathname === to ? "secondary" : "light"}
        onClick={handleButtonClick}
      >
        {label}
      </Button>
    </div>
  );
};
