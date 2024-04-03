const alphabet = "abcdefghijklmnopqrstuvwxyz";

function shift(symbol, key) {
  key = key % 26;

  for (let i = 0; i < alphabet.length; i++) {
    if (symbol === alphabet[i]) {
      return i + key > 25 ? alphabet[((i + key) % 25) - 1] : alphabet[i + key];
    }
    if (symbol.toLowerCase() === alphabet[i]) {
      return i + key > 25
        ? alphabet[((i + key) % 25) - 1].toUpperCase()
        : alphabet[i + key].toUpperCase();
    }
  }
  return symbol;
}

function caesarCipher(text, key) {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    encrypted += shift(text[i], key);
  }
  return encrypted;
}

export { caesarCipher };
