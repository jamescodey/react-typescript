//import React from 'react'
import { Stack } from "react-bootstrap";
import { CalcButton } from "./CalcButton";
import { FC } from "react";

interface CalcButtonProps {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  id: string;
  dataFromButton: (data: string) => void;
}

export const ButtonSet: FC<CalcButtonProps> = ({
  value1,
  value2,
  value3,
  value4,
  id,
  dataFromButton,
}) => {
  const sendData = (data: string): void => {
    data === "x" ? dataFromButton("*") : dataFromButton(data);
  };
  return (
    <div>
      <Stack direction="horizontal" gap={2} id={id}>
        <CalcButton value={value1} dataFromButton={sendData} />
        <CalcButton value={value2} dataFromButton={sendData} />
        <CalcButton value={value3} dataFromButton={sendData} />
        <CalcButton value={value4} dataFromButton={sendData} />
      </Stack>
    </div>
  );
};
