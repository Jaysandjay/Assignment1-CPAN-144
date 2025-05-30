import HoverOval from "@/app/components/HoverOval";
import React from "react";
import Title from "@/app/components/Title";

export default function hover() {
  // Create a list of colors for the HoverOval component
  const colors = ["blue", "red", "yellow", "green"];

  return (
    <div>
      <Title title="Hover" />
      <p className="instructions">Hover over to add to the count</p>
      <div className="ovalContainers">
        {/* go through the list of colors and make a HoverOval component */}
        {colors.map((color, index) => (
          <HoverOval key={index} id={index} color={color} />
        ))}
      </div>
    </div>
  );
}
