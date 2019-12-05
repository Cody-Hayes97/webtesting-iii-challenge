import React from "react";
import * as rtl from "@testing-library/react";
import Dashboard from "./Dashboard";
import "@testing-library/jest-dom/extend-expect";

test("shows the controls and display", () => {
  const wrapper = rtl.render(<Dashboard />);

  expect(wrapper.asFragment()).toMatchSnapshot();
});
