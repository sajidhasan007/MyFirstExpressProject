const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

// const express = require("express");
// const app = new express();

app.listen(process.env.RUNNING_PORT, function () {
  console.log("server run successfully");
});
