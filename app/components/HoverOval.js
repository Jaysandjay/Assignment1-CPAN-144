import React, { useState } from "react";
import ClearButton from "./ClearButton";

//A component that is oval shaped that takes a color as an argument to set the background color
export default function HoverOval({ color }) {
  // Create state variables to know what the current number of times hovered over is, and a variable to know when it is hovered over
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // When hovered over, set isHovered to true and add to the current number of times it has been hovered over
  function handleHover() {
    setIsHovered(true);
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <div className="hoverOval">
      
      {/* If the component is hovered over, display a message */}
      <h3>{isHovered && "Hover active!"}</h3>
      <div
        style={{ backgroundColor: color }}
        className="oval"
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Show the curret number of times it is hovered over inside the oval */}
        {currentNumber}
      </div>
      {/* Create a clear button for the oval to set the number of times hovered over to 0 */}
      <ClearButton variableToClear={setCurrentNumber}></ClearButton>
    </div>
  );
}
