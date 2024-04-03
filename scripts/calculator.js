const calculator = (() => {
  const checkIfNumeric = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number")
      throw new TypeError("Provide number");
  };
  const add = (a, b) => {
    checkIfNumeric(a, b);
    return a + b;
  };
  const sub = (a, b) => {
    checkIfNumeric(a, b);
    return a - b;
  };
  const mul = (a, b) => {
    checkIfNumeric(a, b);
    return a * b;
  };
  const div = (a, b) => {
    checkIfNumeric(a, b);
    return a / b;
  };
  return { add, sub, mul, div };
})();

export { calculator };
