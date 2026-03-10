const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello from Node.js! - Version 1");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
