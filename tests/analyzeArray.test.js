import { analyzeArray } from "../scripts/analyzeArray.js";

let testArray = [1, 8, 3, 4, 2, 6];
let testArray2 = [1, 2, 3, 4, 5];
let testArray3 = [1, 3, 5, 7, 9, 0, 10];

it("returns an object", () => {
  expect(analyzeArray(testArray)).toBeInstanceOf(Object);
});

it("calculates average", () => {
  expect(analyzeArray(testArray)).toMatchObject({ average: 4 });
  expect(analyzeArray(testArray2)).toMatchObject({ average: 3 });
  expect(analyzeArray(testArray3)).toMatchObject({ average: 5 });
});

it("calculates min", () => {
  expect(analyzeArray(testArray)).toMatchObject({ min: 1 });
  expect(analyzeArray(testArray2)).toMatchObject({ min: 1 });
  expect(analyzeArray(testArray3)).toMatchObject({ min: 0 });
});

it("calculates max", () => {
  expect(analyzeArray(testArray)).toMatchObject({ max: 8 });
  expect(analyzeArray(testArray2)).toMatchObject({ max: 5 });
  expect(analyzeArray(testArray3)).toMatchObject({ max: 10 });
});

it("calculates length", () => {
  expect(analyzeArray(testArray)).toMatchObject({ length: 6 });
  expect(analyzeArray(testArray2)).toMatchObject({ length: 5 });
  expect(analyzeArray(testArray3)).toMatchObject({ length: 7 });
});

console.log(analyzeArray(testArray));
