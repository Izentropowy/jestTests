import { capitalize } from "../scripts/capitalize";

it("should capitalize a word", () => {
  const testCases = [
    { word: "bartek", expected: "Bartek" },
    { word: "sylwia", expected: "Sylwia" },
    { word: "random", expected: "Random" },
  ];

  testCases.forEach((t) => {
    let actual = capitalize(t["word"]);
    let expected = t["expected"];
    expect(actual).toBe(expected);
  });
});

it("should capitalize a sentence", () => {
  const testCases = [
    { word: "i am a sentence", expected: "I am a sentence" },
    { word: "you are a sentence", expected: "You are a sentence" },
    { word: "they are a sentence", expected: "They are a sentence" },
  ];

  testCases.forEach((t) => {
    let actual = capitalize(t["word"]);
    let expected = t["expected"];
    expect(actual).toBe(expected);
  });
});

it("should do nothing when a sentence does not start with a letter", () => {
  const testCases = [
    { word: "1 i am a sentence", expected: "1 i am a sentence" },
    { word: "! you are a sentence", expected: "! you are a sentence" },
    { word: "? they are a sentence", expected: "? they are a sentence" },
    { word: " they are a sentence", expected: " they are a sentence" },
  ];

  testCases.forEach((t) => {
    let actual = capitalize(t["word"]);
    let expected = t["expected"];
    expect(actual).toBe(expected);
  });
});

it("should throw an error when there is no input", () => {
  const testCases = [
    { word: undefined, expected: "There is no data to process" },
    { word: null, expected: "There is no data to process" },
    { word: "", expected: "There is no data to process" },
  ];

  testCases.forEach((t) => {
    expect(() => capitalize(t.word)).toThrowError(t.expected);
  });
});
