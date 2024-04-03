import { calculator } from "../scripts/calculator";

it("adds int and floats correctly", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(32, 78)).toBe(110);
  expect(calculator.add(32.34, 78.425346)).toBeCloseTo(110.76534);
});

it("substracts int and floats correctly", () => {
  expect(calculator.sub(1, 1)).toBe(0);
  expect(calculator.sub(2, 3)).toBe(-1);
  expect(calculator.sub(50, 23)).toBe(27);
  expect(calculator.sub(32.34, 21.425346)).toBeCloseTo(10.914654);
});

it("multiplies int and floats correctly", () => {
  expect(calculator.mul(1, 1)).toBe(1);
  expect(calculator.mul(2, 3)).toBe(6);
  expect(calculator.mul(50, 23)).toBe(1150);
  expect(calculator.mul(2.54, 3.45)).toBeCloseTo(8.763);
});

it("divides int and floats correctly", () => {
  expect(calculator.div(1, 1)).toBe(1);
  expect(calculator.div(10, 2)).toBe(5);
  expect(calculator.div(50, 5)).toBe(10);
  expect(calculator.div(2, 3)).toBeCloseTo(0.666);
});

it("throws an error when non-numeric value is provided", () => {
  expect(() => calculator.add("word", 1)).toThrow(Error);
  expect(() => calculator.sub(false, 1)).toThrow(Error);
  expect(() => calculator.mul(null, 1)).toThrow(Error);
  expect(() => calculator.div(undefined, 1)).toThrow(Error);
});
