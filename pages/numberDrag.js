import React from "react";
import Title from "@/app/components/Title";
import NumberBox from "@/app/components/numberBox";
import { useState } from "react";
import ClearButton from "@/app/components/ClearButton";

export default function numberDrag() {
  // Create state variables for the number to add and current number inside the drop box
  const [numToAdd, setNumToAdd] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);

  // Create an array with the specified numbers to go inside each NumberBox component
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    numbers.push(i);
  }

  // When dragging a box, set the number to add the same value as the number inside the box
  function handleDragStart(num) {
    setNumToAdd(num);
  }

  // When dragging is stopped, set the number to add to 0
  function handleDragEnd() {
    setNumToAdd(0);
  }

  // Prevent default behaviour when dragging
  function handleDragOver(e) {
    e.preventDefault();
  }

  // Add the box values together
  function addNumber(e) {
    e.preventDefault();
    setCurrentNumber(currentNumber + numToAdd);
  }

  return (
    <div>
      <Title title="Number Drag" />
      <p className="instructions">Drag and drop the boxes to add the value </p>
      <div className="boxLayout">
        {/* Create the drop box and set the number inside to the current number variable */}
        {/* Ondrop function will add the numbers of the boxes */}
        <NumberBox
          number={currentNumber}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          onDrop={(e) => addNumber(e)}
        />
        <div className="boxes">
          {/* Go through list of numbers and create NumberBox components with the number as the number to show inside of each box */}
          {numbers.map((num) => (
            <NumberBox
              number={num}
              key={num}
              onDragStart={() => handleDragStart(num)}
              onDragEnd={() => handleDragEnd()}
            />
          ))}
        </div>
        <ClearButton variableToClear={setCurrentNumber} />
      </div>
    </div>
  );
}
