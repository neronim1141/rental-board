import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("button click", () => {
  render(<Button />);
  expect(screen.getByText("Kliknij mnie")).toBeDefined();
});
