const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js server is running!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
