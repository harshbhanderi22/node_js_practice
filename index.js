const express = require('express');
//To make express executable
const app = express();
const path = require('path');

const webpath = path.join(__dirname, 'webPage');

app.use(express.static(webpath));

app.listen(5000);