"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendfile("public/index.html");
});

module.exports = app;
module.exports.handler = serverless(app);
