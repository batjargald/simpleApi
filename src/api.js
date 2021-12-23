const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

const port = 3000;

router.get("/", (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Хоосон байж болохгүй!" });
  }
  res.json({ data: req.query });
});

app.use("/.netlify/functions/api", router);

app.listen(port, console.log("server listening " + port));

module.exports.handler = serverless(app);
