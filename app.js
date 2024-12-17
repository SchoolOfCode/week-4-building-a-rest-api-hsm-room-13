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



app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});
// TASK 1:

// Write a request handler to return the correct response and perform the correct action when a `GET` request is received to `/quotes`. 
// Choose the appropriate helper function from `quote.js` to get your data.

// app.get means listen for get request in the route '/quotes'
app.get("/quotes", async function (req, res) {

  // when we recieve a req, we want to get all of the quotes
  const quotes = await getQuotes()

  // then respond with those quotes
  res.json(quotes);

});

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
