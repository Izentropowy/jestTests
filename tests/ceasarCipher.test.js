import { caesarCipher } from "../scripts/caesarCipher.js";

it("encrypts simple message with small shift", () => {
  expect(caesarCipher("bartek", 4)).toBe("fevxio");
  expect(caesarCipher("zzz", 1)).toBe("aaa");
});

it("encrypts message with big shift", () => {
  expect(caesarCipher("bartek", 40)).toBe("pofhsy");
  expect(caesarCipher("qwerty", 999)).toBe("bhpcej");
});

it("deals with punctuation", () => {
  expect(caesarCipher("b.?1c", 2)).toBe("d.?1e");
  expect(caesarCipher("b?rte*", 40)).toBe("p?fhs*");
});

it("deals with different cases", () => {
  expect(caesarCipher("i am lower case", 7)).toBe("p ht svdly jhzl");
  expect(caesarCipher("I AM UPPER CASE", 77)).toBe("H ZL TOODQ BZRD");
  expect(caesarCipher("I aM A miX!", 777)).toBe("F xJ X jfU!");
});
