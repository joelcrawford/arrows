"use strict";
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendfile("public/index.html");
});

app.listen(80, () => console.log("Gator app listening on port 80!"));
