const bonusPoint = require("./bonus.js");

function sendInternInfo(req, res) {
  res.status(200);
  res.json({
    slackUsername: "code_vic",
    backend: true,
    age: 24,
    bio: "my name is Victor Ehimigbai i am a full stack developer currently in the HNGi9 program",
  });
}

function performOperation(req, res) {
  const { operation_type, x, y } = req.body;
  const string = operation_type.split(" ").length;

  const operator = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    addition: (x, y) => x + y,
    add: (x, y) => x + y,
    plus: (x, y) => x + y,
    sum: (x, y) => x + y,
    subtraction: (x, y) => x - y,
    minus: (x, y) => x - y,
    multiplication: (x, y) => x * y,
    multiply: (x, y) => x * y,
    division: (x, y) => x / y,
    divide: (x, y) => x / y,
  };

  function operation(operation_type, x, y) {
    return operator[operation_type](x, y);
  }
  if (operation_type in operator && string === 1) {
    const result = operation(operation_type, x, y);
    res.status(200);
    res.json({ slackUsername: "code_vic", result, operation_type });
    return;
  }
  if (string > 1) {
    const result = bonusPoint(operation_type);
    res.status(200);
    res.json({ slackUsername: "code_vic", result, operation_type });
    return;
  } else {
    res.status(400);
    res.json({ message: "please maake sure your operation_type is valid" });
  }
}

module.exports = { sendInternInfo, performOperation };
