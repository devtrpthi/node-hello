const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const staticPath = path.join(__dirname,'../public');


const port = 3000;

app.use(express.static(staticPath));

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

app.listen(port, () => {
  console.log(`listening to port number ${port}`);
})
