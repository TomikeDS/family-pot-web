import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SiteHeader } from "./site-header";

afterEach(cleanup);

describe("SiteHeader", () => {
  it("exposes the primary navigation with keyboard-focusable links", () => {
    render(<SiteHeader />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    const links = Array.from(nav.querySelectorAll("a"));

    expect(links.map((link) => link.textContent)).toEqual([
      "Dashboard",
      "Recipients",
      "Transfers",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "/dashboard",
      "/recipients",
      "/transfers",
    ]);
    for (const link of links) {
      expect(link.tabIndex).toBe(0);
    }
  });
});
