"use strict";
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.get("/", function (_, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

module.exports = app;
module.exports.handler = serverless(app);
