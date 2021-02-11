"use strict";
//const quotes = ["hello","world","fancy","little","thing"];
const quotes = require("./quotes");

const http = require("http");


//console.log(quotes[randomNumber]);

// server.js
const port = 8888;

http.createServer((req, res) => {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write(quotes[randomNumber]);
  res.end();
}).listen(8888);

console.log("http://localhost:"+port);