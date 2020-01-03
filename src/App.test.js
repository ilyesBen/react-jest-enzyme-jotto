import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const setup = () => {
  return shallow(<App />);
};

test("renders App component without error", () => {
  const wrapper = setup();
  expect(wrapper.exists()).toBeTruthy();
});
