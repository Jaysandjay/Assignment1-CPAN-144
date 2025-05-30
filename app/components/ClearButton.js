import React from "react";


// A button to clear input from user
// Argument is the variable to clear (the useState variable example: setCurrentValue())
export default function ClearButton({ variableToClear }) { 
  function clear() {
    // Call the setCurrentValue() passed to component and set it to 0
    variableToClear(0);
  }

  // Whe button is clicked, call the clear function above
  return <button onClick={clear}>Clear</button>;
}
