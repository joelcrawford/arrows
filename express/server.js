"use strict";
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const router = express.Router();
router.get("/", (_, res) => {
  res.sendFile("../public/index.html", { root: __dirname });
});

// router.get("/", (_, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Hello from Express.js!</h1>");
//   res.end();
// });

// app.get("/", function (_, res) {
//   res.sendFile("public/index.html", { root: __dirname });
// });

app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "..", "public")));
app.use("/.netlify/functions/server", router); // path must route to lambda
console.log(router.stack[0]);
// app.use("/", (_, res) =>
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"))
// );

module.exports = app;
module.exports.handler = serverless(app);
