//import React from 'react'
import { FC } from "react";

interface ParagraphProps {
  content: string;
}

export const Paragraph: FC<ParagraphProps> = ({ content }) => {
  return (
    <div className="paragraph-div">
      <p>{content}</p>
    </div>
  );
};
