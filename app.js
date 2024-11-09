const express = require('express');
const mongoose = require('./config/mongoDB');
require('dotenv').config();
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose();

app.get('/', (req, res) => {
   res.end('hello world')
});

app.listen(process.env.SERVER_PORT, () => {
    console.log('server start');
})