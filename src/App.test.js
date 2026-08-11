import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Eteernal Beautyy site", () => {
  test("renders the studio wordmark in the header", () => {
    render(<App />);
    const banner = screen.getByRole("banner");
    expect(within(banner).getByText(/eteernal beautyy/i)).toBeInTheDocument();
  });

  test("renders the hero heading and a booking call to action", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: /eteernal beautyy/i })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /book a trial/i }).length
    ).toBeGreaterThan(0);
  });

  test("exposes every primary route in the navigation", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    ["Home", "About", "Services", "Gallery", "Contact"].forEach((label) => {
      expect(within(nav).getByRole("link", { name: label })).toBeInTheDocument();
    });
  });
});
