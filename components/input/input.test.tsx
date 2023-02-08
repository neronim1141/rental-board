import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

test("input click", async () => {
  const mockedFunction = vi.fn();
  render(<Input onClick={mockedFunction} placeholder="Test" />);
  const input = screen.getByPlaceholderText("Test");
  expect(input).toBeDefined();
  expect(input).toBeEnabled();
  await userEvent.click(input);

  expect(mockedFunction).toBeCalled();
});
test("OnChange event", async () => {
  const mockedFunction = vi.fn();
  render(<Input onChange={mockedFunction} placeholder="Test" />);
  const input = screen.getByPlaceholderText("Test");
  await userEvent.type(input, "onchange test");

  expect(input).toHaveValue("onchange test");
  expect(mockedFunction).toBeCalled();
});
