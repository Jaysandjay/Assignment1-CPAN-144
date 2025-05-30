import React, { useState } from "react";
import ClearButton from "./ClearButton";

export default function HoverOval({ color }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleHover() {
    setIsHovered(true);
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <div className="hoverOval">
      <h3>{isHovered && "Hover active!"}</h3>
      <div
        style={{ backgroundColor: color }}
        className="oval"
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentNumber}
      </div>
      <ClearButton variableToClear={setCurrentNumber}></ClearButton>
    </div>
  );
}
