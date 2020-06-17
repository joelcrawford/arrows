"use strict";
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const app = express();
const router = require("./router");

app.use("/public", express.static(path.join(__dirname, "..", "public")));
app.use("/", router);

app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
