const express = require('express');
//To make express executable
const app = express();

//Using get to display information
app.get('', (req, resp) => {

    //To send request parameter
    req.query.name = "harsh";
    //Recieve Response, Displaying HTML data
    resp.send(`
        <h1>Welcome to homepage, ${req.query.name}</h1><br>
        <a href="/aboutus">Go to about us page </a>
    `)
})

//give route to about us which will give this data on about us page
app.get('/aboutus', (req, resp) => {

    //Displaying JSON data
    resp.send(`
    [
        {
            school : "PPSU",
            course: "IT"
        }
        {
            name : "Harsh",
            email : "harsh@gmail.com"
        }
    ]
    <a href="/">Go to Home page </a>
    `)
})

//Listen server on localhost
app.listen(5000);