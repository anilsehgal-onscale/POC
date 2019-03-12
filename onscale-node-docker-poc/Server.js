'use strict';
const express = require('express');
var cors = require('cors');
var path = require('path');
const app = express();
app.use('/', express.static('app'))

app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.get('/products', function (req, res) {
    res.send([
        {
            "id": 1,
            "name": "Product001",
            "cost": 10.0,
            "quantity": 1000
        },
        {
            "id": 2,
            "name": "Product002",
            "cost": 20.0,
            "quantity": 2000
        },
        {
            "id": 3,
            "name": "Product003",
            "cost": 30.0,
            "quantity": 3000
        },
        {
            "id": 4,
            "name": "Product004",
            "cost": 40.0,
            "quantity": 4000
        }
    ])
})

app.listen(8080);