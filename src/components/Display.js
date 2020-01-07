import React, { Component } from "react";
import { StyledDisplay } from "./styles/StyledDisplay";
const Display = ({ gameOver, text, points }) => {
  return (
    <StyledDisplay gameOver={gameOver}>
      {text} {points}
    </StyledDisplay>
  );
};

export default Display;
