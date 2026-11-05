import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Home from "./page";

afterEach(cleanup);

describe("Home page", () => {
  it("renders the starter heading", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      "To get started",
    );
  });
});
