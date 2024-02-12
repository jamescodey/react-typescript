//import React from 'react'
import { Button } from "react-bootstrap";
import { FC } from "react";

interface CalcButton {
  value: string;
  dataFromButton: (data: string) => void;
}

export const CalcButton: FC<CalcButton> = ({ value, dataFromButton }) => {
  const sendData = (): void => {
    dataFromButton(value);
  };
  return (
    <>
      <Button variant="light" className="calc-button" onClick={sendData}>
        {value}
      </Button>
    </>
  );
};
