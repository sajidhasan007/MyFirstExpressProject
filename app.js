const express = require("express");
const router = require("./src/routes/api");

const app = new express();

const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// database connections

let URI = "mongodb://127.0.0.1:27017/schools";
let OPTION = { user: "", pass: "" };
mongoose.set("strictQuery", false);

mongoose.connect(URI, OPTION, (error) => {
  console.log("connection success");
  console.log(error);
});

app.use("/api/v1", router);

// undefined route not found message

app.use("*", (req, res) => {
  res.status(404).json({ status: false, data: "Not Found" });
});

module.exports = app;
