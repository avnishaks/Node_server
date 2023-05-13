const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const server = express();


server.use(cors());
server.use(bodyParser.json());

server.post('/demo', (req, res) => {
    console.log(req.body)
    res.json(req.body);
})


server.listen(8080, () => {
    console.log('listening on port');
});