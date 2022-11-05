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
    return { result, sign };
  } else {
    result = operator[sign](numbers[0], numbers[1]);
    return { result, sign };
  }
}

const checker = function (operation_type) {
  if (
    operation_type === "add" ||
    operation_type === "sum" ||
    operation_type === "addition" ||
    operation_type === "added" ||
    operation_type === "+"
  ) {
    return "addition";
  }
  if (
    operation_type === "subtraction" ||
    operation_type === "minus" ||
    operation_type === "subtracted" ||
    operation_type === "subtract" ||
    operation_type === "-"
  ) {
    return "subtraction";
  }
  if (
    operation_type === "multiplication" ||
    operation_type === "times" ||
    operation_type === "multiply" ||
    operation_type === "*"
  ) {
    return "multiplication";
  }
  if (
    operation_type === "divide" ||
    operation_type === "division" ||
    operation_type === "divided" ||
    operation_type === "over" ||
    operation_type === "/"
  ) {
    return "division";
  }
};

module.exports = { bonusPoint, checker };
