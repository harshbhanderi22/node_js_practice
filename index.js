const config = require('./config');
const express = require('express');
const login = require('./login_model');
const app = express();

app.use(express.json());
app.post('/',async (req, resp) => {

    //We can pass direct data or can pass req.body if we are passing data from body (in postman)
    const data = new login(
        {
            name: 'harsh',
            email: 'harsh@developer.com',
            role: 'broker'
        }
    )
    const result =await data.save();
    console.log(result);
    resp.send(result);
})

app.listen(5000);