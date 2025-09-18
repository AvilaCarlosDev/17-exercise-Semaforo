import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Home - Traffic Light", () => {
  it("muestra el título", () => {
    render(<Home />);
    expect(screen.getByText("La Traffic Light")).toBeTruthy();
  });

  it("la luz inicial (orange) brilla", () => {
    const { container } = render(<Home />);
    expect(container.querySelector(".orange.glow")).not.toBeNull();
  });

  it("al hacer click en otra luz solo esa brilla", () => {
    const { container } = render(<Home />);
    const red = container.querySelector(".red");
    fireEvent.click(red);
    expect(container.querySelector(".red.glow")).not.toBeNull();
    expect(container.querySelector(".orange.glow")).toBeNull();
  });

  it("Toggle cycle avanza al siguiente color", () => {
    const { container } = render(<Home />);
    const toggle = screen.getByText("Toggle cycle");
    fireEvent.click(toggle);
    expect(container.querySelector(".green.glow")).not.toBeNull();
  });

  it("Add purple añade la luz púrpura", () => {
    const { container } = render(<Home />);
    const add = screen.getByText("Add purple");
    fireEvent.click(add);
    expect(container.querySelector(".purple")).not.toBeNull();
  });
});
