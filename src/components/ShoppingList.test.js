import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";

test("displays a list of shopping items with an extra prop", () => {
  const { container, getByText } = render(
    <ShoppingList name="test shopping list" extraProp="extra prop" />
  );
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Shopping List for test shopping list"
  );
  const list = container.querySelector("ul");
  expect(list.childElementCount).toBe(3);
  expect(container.querySelector("p")).toHaveTextContent("extra prop");
});

test("displays a list of shopping items without an extra prop", () => {
  const { container, getByText } = render(
    <ShoppingList name="test shopping list" />
  );
  expect(screen.getByRole("heading")).toHaveTextContent(
    "Shopping List for test shopping list"
  );
  const list = container.querySelector("ul");
  expect(list.childElementCount).toBe(3);
  expect(container.querySelector("p")).toBe(null);
});
