import express from "express";

const app = express();
const PORT = 3000;


import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

const quotes = getQuotes();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});
  app.get("/quotes", function (req, res) {
    res.send(getQuotes());
  });

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
