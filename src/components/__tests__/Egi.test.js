import { render, screen } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "@testing-library/jest-dom"

const MyComponent = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => setText("Hello, World!"), 500); // Simulates delayed render
  }, []);

  return <h1>{text}</h1>;
};

test("renders text after delay", async () => {
  render(<MyComponent />);

  // Waits for the element to appear
  const heading = await screen.findByText("Hello, World!");

  expect(heading).toBeInTheDocument();
});

it('getbytext',()=>{
    const MyComponent = () => <h1>Hello, World!</h1>;
    render(<MyComponent />);

    // Immediately finds the element
    const heading = screen.getByText("Hello, World!");
  
    expect(heading).toBeInTheDocument();
})
