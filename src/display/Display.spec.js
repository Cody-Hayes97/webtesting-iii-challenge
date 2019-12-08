// Test away!

import React from "react";
import * as rtl from "@testing-library/react";
import Display from "./Display";
import "@testing-library/jest-dom/extend-expect";

test("unlocked by default", () => {
  const wrapper = rtl.render(<Display />);

  const unlocked = wrapper.getByText(/Unlocked/i);
  const open = wrapper.getByText(/Open/i);

  expect(unlocked).toBeVisible();
  expect(open).toBeVisible();
});

test("red class when locked", () => {
  const wrapper = rtl.render(<Display locked={true} />);
  const lockedButton = wrapper.getByText(/locked/i);
  expect(lockedButton).toHaveClass("red-led");
});
test("green class when unlocked", () => {
  const wrapper = rtl.render(<Display locked={false} />);
  const unlockedButton = wrapper.getByText(/unlocked/i);
  expect(unlockedButton).toHaveClass("green-led");
});

test("display closed if closed prop is true", () => {
  const wrapper = rtl.render(<Display closed={true} />);
  const isClosed = wrapper.getByTestId(/isclosed/i);

  expect(isClosed).toHaveTextContent(/closed/i);
});

test("display locked if locked prop is true", () => {
  const wrapper = rtl.render(<Display locked={true} />);
  const isLocked = wrapper.getByTestId(/islocked/i);

  expect(isLocked).toHaveTextContent(/locked/i);
});
