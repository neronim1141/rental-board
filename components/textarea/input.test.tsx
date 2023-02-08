import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Textarea } from ".";
import { test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

test("input click", async () => {
  const mockedFunction = vi.fn();
  render(<Textarea onClick={mockedFunction} placeholder="Test" />);
  const textare = screen.getByPlaceholderText("Test");
  expect(textare).toBeDefined();
  expect(textare).toBeEnabled();
  await userEvent.click(textare);

  expect(mockedFunction).toBeCalled();
});
test("OnChange event", async () => {
  const mockedFunction = vi.fn();
  render(<Textarea onChange={mockedFunction} placeholder="Test" />);
  const textare = screen.getByPlaceholderText("Test");
  await userEvent.type(textare, "onchange test");

  expect(textare).toHaveValue("onchange test");
  expect(mockedFunction).toBeCalled();
});
