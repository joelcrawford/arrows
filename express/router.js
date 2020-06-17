const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

// router.get("/model", (_, res) => {
//   res.sendFile(path.join(__dirname, "..", "/public", "index.html"));
// });

module.exports = router;
