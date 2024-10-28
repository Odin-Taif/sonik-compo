import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../src/components";
import { describe, expect, it, vi } from "vitest";
import { FaCoffee } from "react-icons/fa";

describe("Button Component", () => {
  it("renders with the given label", () => {
    render(<Button label="Test Button" onClick={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Test Button/i);
  });

  it("renders the icon when icon prop is provided", () => {
    render(<Button label="Icon Button" icon={FaCoffee} onClick={() => {}} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("does not render the icon when icon prop is not provided", () => {
    render(<Button label="No Icon Button" onClick={() => {}} />);
    const icon = screen.queryByTestId("icon");
    expect(icon).not.toBeInTheDocument();
  });

  it("triggers onClick event when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
