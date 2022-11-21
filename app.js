const express = require('express')
const app = express()
const port = 3004
var detailsCount = 0;
var currentDate = new Date();
var numOfAccesses = 0;

app.get('/', (req, res) => {
  res.send("<h1>This is Question 1.1</h1>")
  numOfAccesses++;
  console.log(`Server Accessed ${numOfAccesses} times`)
})

app.get('/about', (req, res) => {
  res.send("<h1>This is the about page</h1>" + "Question 1.1")
  numOfAccesses++;
  console.log(`Server Accessed ${numOfAccesses} times`)
})

app.get('/details', (req, res) => {
  res.redirect("/")
  detailsCount++;
  var name = req.hostname;
  var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  console.log(`/details request number: ${detailsCount} from: ${name} at: ${time}`)
  numOfAccesses++;
  console.log(`Server Accessed ${numOfAccesses} times`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})