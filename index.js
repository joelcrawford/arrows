const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("geometry"));
app.use(express.static("img"));
app.use(express.static("lib"));
app.use(express.static("style"));
// viewed at http://localhost:8080
app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(8080);
