import express from "express";
import path from "path";

const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "app.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
