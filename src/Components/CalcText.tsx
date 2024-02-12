//import React from 'react'
import { FC } from "react";

interface CalcTextProps {
  content: string;
  type: string;
}

export const CalcText: FC<CalcTextProps> = ({ type, content }) => {
  return type === "result" ? (
    <div className="calc-text">
      <h3>{content}</h3>
    </div>
  ) : (
    <div className="calc-text">
      <h6>{content}</h6>
    </div>
  );
};
