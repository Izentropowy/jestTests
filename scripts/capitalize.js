function capitalize(word) {
  if (!word) {
    throw new TypeError("There is no data to process");
  }
  return word[0].toUpperCase() + word.slice(1);
}

export { capitalize };
