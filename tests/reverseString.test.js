import { reverseString } from "../scripts/reverseString";

it("reverses a word", () => {
  let testCases = [
    { word: "random", expected: "modnar" },
    { word: "du/a", expected: "a/ud" },
    { word: "very1ongword", expected: "drowgno1yrev" },
  ];

  testCases.forEach((t) => {
    expect(reverseString(t["word"])).toBe(t["expected"]);
  });
});

it("reverses a sentence", () => {
  let testCases = [
    { word: "random sentence is here", expected: "ereh si ecnetnes modnar" },
    { word: "reverse this s", expected: "s siht esrever" },
    { word: "!/4 ..dfkm apsfom3", expected: "3mofspa mkfd.. 4/!" },
  ];

  testCases.forEach((t) => {
    expect(reverseString(t["word"])).toBe(t["expected"]);
  });
});

it("doesn not accept other types", () => {
  let testCases = [
    { word: 123, expected: "Pass the string" },
    { word: null, expected: "Pass the string" },
    { word: 0.54, expected: "Pass the string" },
  ];

  testCases.forEach((t) => {
    expect(() => reverseString(t.word)).toThrowError(t.expected);
  });
});
