// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import Controls from "./Controls";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";

test("cannot be opened or closed if locked", () => {
  const wrapper = rtl.render(<Controls locked={true} />);
  const openButton = wrapper.getByTestId(/open-btn/i);
  expect(openButton).not.toBeEnabled;
});

test("buttons render", () => {
  const wrapper = rtl.render(<Controls />);
  const unlockButton = wrapper.getByTestId(/unlock-btn/i);
  const openButton = wrapper.getByTestId(/open-btn/i);

  expect(unlockButton).toBeVisible();
  expect(openButton).toBeVisible();
});

test("closed button is disabled if locked", () => {
  const wrapper = rtl.render(<Controls locked={true} />);
  const unlockButton = wrapper.getByTestId(/unlock-btn/i);

  expect(unlockButton).toBeDisabled();
});

test("locked button is disabled if open", () => {
  const wrapper = rtl.render(<Controls closed={false} />);
  const unlockButton = wrapper.getByTestId(/unlock-btn/i);
  expect(unlockButton).toBeDisabled();
});

test("change state of lock button if clicked", () => {
  const wrapper = rtl.render(<Controls />);
  const unlockButton = wrapper.getByTestId(/unlock-btn/i);

  fireEvent.click(unlockButton);
  expect(unlockButton).toHaveTextContent(/Lock Gate/i);
});

test("change state of open button if clicked", () => {
  const wrapper = rtl.render(<Controls />);
  const openButton = wrapper.getByTestId(/open-btn/i);

  fireEvent.click(openButton);
  expect(openButton).toHaveTextContent(/Close Gate/i);
});
