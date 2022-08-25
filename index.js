const config = require('./config');
const express = require('express');
const login = require('./login_model');
const app = express();

app.use(express.json());

//Post API in mongoose
app.post('/', async (req, resp) => {
    //We can pass direct data or can pass req.body if we are passing data from body (in postman)
    const data = new login(
        {
            name: 'harsh',
            email: 'harsh@developer.com',
            role: 'broker'
        }
    )
    const result = await data.save();
    console.log(result);
    resp.send(result);
});

app.get('/get', async (req, resp) => {
    const data = await login.find();
    resp.send(data);
})

app.put('/put', async (req, resp) => {
    const data = await login.updateOne(
        {email: 'harsh@developer.com'},
        {$set:  { email:'harsh@bhanderi.com' }}
    )
    resp.send(data);
})

//It is used to directly pass id in paramter
//For Example: http://localhost:5000/delete/6301c049bc414739858a315e
app.delete('/delete/:_id',async (req, resp) => {
    const data = await login.deleteOne(
        req.params
    );
    resp.send(data);
})

app.listen(5000);