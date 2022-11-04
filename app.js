const express = require("express");
require("dotenv").config();
const router = require("./router.js");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("connected to server sucessfully on port 5000");
});
