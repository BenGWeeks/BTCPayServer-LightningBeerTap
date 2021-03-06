// To install Node.js on a Raspberry Pi:
//
// curl -fsSL https://deb.nodesource.com/setup_18.x |sudo -E bash -
// sudo apt-get install -y nodejs
//
// To install Node.JS on Windows for development, go to:
//
// https://nodejs.org/
//
// To install ExpressJS (ref: http://expressjs.com/):
// 
// npm install express --save
//
// Run:
//
// node dispenser.js

const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.post('/', (req, res) => {
    var dateTime = Date.now();
    console.log('Event was triggered');
    console.log(req.body)
    res.writeHead(200)
    res.write('Dispensing')
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})