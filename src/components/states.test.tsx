import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EmptyState, ErrorState, LoadingState } from "./states";

afterEach(cleanup);

describe("LoadingState", () => {
  it("announces that content is loading", () => {
    render(<LoadingState />);

    expect(screen.getByRole("status").textContent).toContain("Loading");
  });
});

describe("ErrorState", () => {
  it("shows the message and calls retry", () => {
    const onRetry = vi.fn();
    render(
      <ErrorState message="The transfers could not be loaded." onRetry={onRetry} />,
    );

    expect(screen.getByRole("alert").textContent).toContain(
      "The transfers could not be loaded.",
    );
    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it("omits the retry button when no callback is provided", () => {
    render(<ErrorState message="Something failed." />);

    expect(screen.queryByRole("button")).toBeNull();
  });
});

describe("EmptyState", () => {
  it("renders a title, description and optional action", () => {
    render(
      <EmptyState
        title="No recipients yet"
        description="Add someone to get started."
        action={<button type="button">Add recipient</button>}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "No recipients yet" }),
    ).toBeTruthy();
    expect(screen.getByText("Add someone to get started.")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Add recipient" })).toBeTruthy();
  });
});
