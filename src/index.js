require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const generator = require("./generator");

const app = express();
app.use(morgan("tiny"));
app.use(helmet());
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send({
    data: "It's working!",
  });
});

app.get("/api", async (req, res) => {
  try {
    const result = await generator(req.body);
    res.send(result);
  } catch (e) {
    res.send({ error: "Something went wrong" });
  }
});

app.get("*", (req, res) => {
  res.status(404).send({
    error: "404 Not Found",
  });
});

app.listen(port, () => {
  console.log("Server is up on port: " + port);
});
