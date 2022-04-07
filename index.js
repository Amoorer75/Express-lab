const express = require('express');
const app = express();
const fruits = require('./fruits');
require('dotenv').config()
const port = process.env.PORT || 4000;

app.get('/ping', (req, res) => {
	res.json('pong');
})
app.get('/greet/:name', (req, res) => {
	res.send(`Why hello there ${req.params.name}`);
    console.log(req.params)
})
app.get('/five', (req, res) => {
	res.send([1,2,3,4,5]);
    console.log(req.params)
})
app.get('/even/:n', (req, res) => {
    let n = req.params.n;
    let evenArray = []
    for (i =2;i<n;i++) {
        i%2 ==0 ? evenArray.push(i):null
    }	
    // res.send(2 <= req.params.n? )
   res.send(evenArray)
    console.log(parseInt(req.params.n))
})
app.get('/namelength/:name', (req, res) => {
	let length = req.params.name.length;

   res.send(`${length}`)
   
    console.log(parseInt(req.params.n))
})
///namelength/:name

app.get('/fruits', (req, res) => {
    res.send(fruits)
    
})

app.get('/fruits/:name', (req, res) => {
    //your code here
    // HINT - you can use a higher-order array method 
    res.send(fruits.filter(fruit => fruit.name === req.params.name? fruit: null))
  })
  



app.listen(port, () => console.log(`running on port ${port}`));
