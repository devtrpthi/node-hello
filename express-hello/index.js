const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req,res) => {
  res.write("<h1>welcome to home page</h1>");
  res.write("<h1>welcome to another same page</h1>");
  res.send();
})

app.get('/about', (req,res) => {
  res.send("welcome to about page");
})

app.get('/contact', (req,res) => {
  res.send("welcome to contact  page");
})

app.get('/temp', (req,res) => {
  res.send("welcome to temp page");
})

app.listen(port, () => {
  console.log(`listening to port number ${3000}`);
})
