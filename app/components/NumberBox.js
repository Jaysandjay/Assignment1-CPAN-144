import React from "react";

// Create a component that is a box with the following arguments

export default function NumberBox({
  // number = number to apear inside box
  number, 
  // The function for the following event handlers
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) {
  return (
    <div
      className="numberBox"
      // Make the box draggable and pass down the functions for the drag event handlers
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {/* Show number inside box */}
      {number}
    </div>
  );
}
