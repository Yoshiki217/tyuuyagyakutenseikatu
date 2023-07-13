// .env
DJANGO_PROJECT_URL = http://localhost:8000

// server.js
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(301, process.env.DJANGO_PROJECT_URL);
});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});