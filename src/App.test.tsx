import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { UNITS } from "./constants";

test("It should render application", () => {
  render(<App />);

  expect(screen.getByText("Weight:")).toBeInTheDocument();
  expect(screen.getByText("Height:")).toBeInTheDocument();
  expect(screen.getByText("Unit:")).toBeInTheDocument();
});

test("It should render initial form values", () => {
  render(<App />);

  const weightElem = screen.getByLabelText("Weight");
  const heightElem = screen.getByLabelText("Height");
  const unitElem = screen.getByLabelText("Unit");

  expect(weightElem).toHaveValue(0);
  expect(heightElem).toHaveValue(0);
  expect(unitElem).toHaveValue(UNITS[0]);
});

test("It should convert weight and height on unit change", () => {
  render(<App />);

  const weightElem = screen.getByLabelText("Weight");
  const heightElem = screen.getByLabelText("Height");
  const unitElem = screen.getByLabelText("Unit");

  fireEvent.change(weightElem, { target: { value: 100 } });
  fireEvent.change(heightElem, { target: { value: 100 } });
  fireEvent.change(unitElem, { target: { value: UNITS[1] } });

  expect(weightElem).toHaveValue(45.359);
  expect(heightElem).toHaveValue(30.48);
  expect(screen.getByText("kg")).toBeInTheDocument();
  expect(screen.getByText("m")).toBeInTheDocument();
  expect(unitElem).toHaveValue(UNITS[1]);

  fireEvent.change(unitElem, { target: { value: UNITS[0] } });

  expect(weightElem).toHaveValue(100);
  expect(heightElem).toHaveValue(100);
  expect(screen.getByText("lbs")).toBeInTheDocument();
  expect(screen.getByText("ft")).toBeInTheDocument();
});
