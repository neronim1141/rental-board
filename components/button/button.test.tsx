import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

test("button click", async () => {
  const mockedFunction = vi.fn();
  render(<Button onClick={mockedFunction}>Kliknij mnie</Button>);

  const button = screen.getByRole("button", { name: "Kliknij mnie" });
  expect(button).toBeDefined();
  expect(button).toBeEnabled();
  await userEvent.click(button);

  expect(mockedFunction).toBeCalled();
});

test("button is disabled if onCLick is not provided", async () => {
  render(<Button>Kliknij mnie</Button>);
  const button = screen.getByRole("button", { name: "Kliknij mnie" });
  expect(button).toBeDisabled();
});

test("button is disabled if onCLick is provided and disabled is true", async () => {
  render(
    <Button onClick={() => {}} disabled>
      Kliknij mnie
    </Button>
  );
  const button = screen.getByRole("button", { name: "Kliknij mnie" });
  expect(button).toBeDisabled();
});
