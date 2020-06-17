"use strict";
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();
// router.get("/", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Hello from Express.js!</h1>");
//   res.end();
// });
router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use("/public", express.static(path.join(__dirname, "..", "public")));
app.use("/.netlify/functions/server_2", router); // path must route to lambda
app.use("/", (_, res) =>
  res.sendFile(path.join(__dirname, "../public/index_2.html"))
);

module.exports = app;
module.exports.handler = serverless(app);
