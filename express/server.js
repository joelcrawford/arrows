"use strict";
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();
const router = require("./router");

//app.use("/model", express.static(path.join(__dirname, "..", "public")));
app.use("/", router);

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (_, res) =>
  res.sendFile(path.join(__dirname, "../public/index_2.html"))
);
module.exports = app;
module.exports.handler = serverless(app);
