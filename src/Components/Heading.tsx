//import React from "react";
import { FC } from "react";

interface HeadingProps {
  heading: string;
}

export const Heading: FC<HeadingProps> = ({ heading }) => {
  return (
    <div className="heading-div">
      <h1 className="heading-h1">{heading}</h1>
    </div>
  );
};
