import React from "react";

export default function ClearButton({ variableToClear }) {
  function clear() {
    variableToClear(0);
  }

  return <button onClick={clear}>Clear</button>;
}
