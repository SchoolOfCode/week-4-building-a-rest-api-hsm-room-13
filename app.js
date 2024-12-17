import express from "express";

const app = express();
const PORT = 7001;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.get("/", async function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});

//ticket 3
app.get(`/quotes`, async function (req, res) {
  const quotes = await getQuotes();
  res.send(quotes);
});

//ticket 4
//listen to get request to receive root `/quotes/:id` 
//choose getQuoteByID function 
app.get(`/quotes/:id`, async function (req, res) {
  const id = req.params.id
  const quote = await getQuoteByID(id);
  res.send(quote);
});
app.listen(PORT, function (){
  console.log(`Server is now listening on http://localhost:${PORT}`);
})















//app.listen(PORT, () => {
  //console.log("Server is running on http.//localhost:3000");
//});
// app.get(`/quotes`, (req, res) => {
//   res.send(getQuotes());
// });


/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World with Express.js!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Adding new routes is as simple as adding new app.get() calls
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

*/






// const quotes = getQuotes();

// app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("Welcome to the inspirational quotes API");
// });
//   app.get("/quotes", function (req, res) {
//     res.send(getQuotes());
//   });
// // TASK 1:

// // Write a request handler to return the correct response and perform the correct action when a `GET` request is received to `/quotes`. 
// // Choose the appropriate helper function from `quote.js` to get your data.

// // app.get means listen for get request in the route '/quotes'
// app.get("/quotes", async function (req, res) {

//   // when we recieve a req, we want to get all of the quotes
//   const quotes = await getQuotes()

//   // then respond with those quotes
//   res.json(quotes);

// });

// // TASK 2: 
// // Write a request handler to return the correct response and perform the correct action when a GET request is received to 
// // /quotes/:id, with a particular ID provided in the url. 
// // Choose the appropriate helper function from quote.js to get your data.

// app.get("/quotes/:id", async function (req, res) {
//   // get id from request parameter url
//   const id = req.params.id;

//   // get a paticular quote by it's id
//   const quote = await getQuoteByID(id)

//   console.log(quote)

//   //then send the response we recieved
//   res.json(quote)

// });

// app.listen(PORT, function () {
//   console.log(`Server is now listening on http://localhost:${PORT}`);
// });
