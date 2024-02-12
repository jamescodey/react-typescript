//import React from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface ButtonProps {
  label: string;
  to: string;
}

export const Button1: FC<ButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(to);
  };
  return (
    <div className="button-div">
      <Button variant="dark" className="button1" onClick={handleButtonClick}>
        {label}
      </Button>
    </div>
  );
};
