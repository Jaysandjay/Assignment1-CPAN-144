import React from "react";

// A component to show the title for the page, argument is the title string

export default function Title({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
    </>
  );
}
