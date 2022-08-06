const express = require('express');
//To make express executable
const app = express();
const path = require('path');

const webpath = path.join(__dirname, 'webPage');

//Load given file at home route
app.get('', (req, resp) => {
    resp.sendFile(`${webpath}/index.html`)
})

//Load about file and here in url we just need to add about not about.html
app.get('/about', (req, resp) => {
    resp.sendFile(`${webpath}/about.html`)
})

//If url is wrong and not from defined urls
app.get('*', (req, resp) => {
    resp.sendFile(`${webpath}/nopage.html`)
})

app.listen(5000);

