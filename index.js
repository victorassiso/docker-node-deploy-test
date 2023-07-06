const express = require("express");
const app = express();
const port = 3333;
app.get("/", (req, res) => {
  res.json({ "Hello World!": "Testing deploy with NodeJs and Docker." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
