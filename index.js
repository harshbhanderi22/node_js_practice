const express = require('express');
//To make express executable
const app = express();

//Using get to display information
app.get('', (req, resp) => {

    //To send request parameter
    req.query.name = "harsh";
    //Recieve Response
   resp.send("It is first page for express " + req.query.name)
})

//give route to about us which will give this data on about us page
app.get('/aboutus', (req, resp) => {
    resp.send("Welcome to about us page")
})

//Listen server on localhost
app.listen(5000);