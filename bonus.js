function bonusPoint(string) {
  const formmattedString = string.toLowerCase();

  const operator = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };
  const sign = [];
  const numbersCollector = [];
  const newstring = formmattedString.split(" ");
  let subtract = null;
  let result = null;
  newstring.forEach((str) => {
    if (
      str.startsWith("0") ||
      str.startsWith("1") ||
      str.startsWith("2") ||
      str.startsWith("3") ||
      str.startsWith("4") ||
      str.startsWith("5") ||
      str.startsWith("6") ||
      str.startsWith("7") ||
      str.startsWith("8") ||
      str.startsWith("9") ||
      str.startsWith("-") ||
      str.startsWith("+")
    ) {
      numbersCollector.push(str);
    }
  });
  const numbers = numbersCollector.map((num) => Number(num));
  newstring.forEach((str) => {
    if (
      str.startsWith("add") ||
      str.startsWith("sum") ||
      str.startsWith("addition") ||
      str.startsWith("plus")
    ) {
      sign.push("+");
    }
    if (str.startsWith("minus") || str.startsWith("difference")) {
      sign.push("-");
    }
    if (
      str.startsWith("multiply") ||
      str.startsWith("multiplication") ||
      str.startsWith("times")
    ) {
      sign.push("*");
    }

    if (str.startsWith("divide") || str.startsWith("over")) {
      sign.push("/");
    }
  });

  newstring.forEach((str) => {
    if (str.startsWith("subtract")) {
      sign.push("-");
      subtract = true;
    }
  });

  if (subtract) {
    result = operator[sign](numbers[1], numbers[0]);
    return result;
  } else {
    result = operator[sign](numbers[0], numbers[1]);
    return result;
  }
}

module.exports = bonusPoint;
