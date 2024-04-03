const analyzeArray = (arr) => {
  function calcAverage(arr) {
    return arr.reduce((sum, cur) => sum + cur) / arr.length;
  }

  function calcMin(arr) {
    return arr.reduce((min, cur) => (cur > min ? min : cur));
  }

  function calcMax(arr) {
    return arr.reduce((min, cur) => (cur > min ? cur : min));
  }

  return {
    average: calcAverage(arr),
    min: calcMin(arr),
    max: calcMax(arr),
    length: arr.length,
  };
};

export { analyzeArray };
