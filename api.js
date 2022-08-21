const express = require('express');
const dbConnect = require('./mongodb');
const app = express();


//Get API to get data from our databse and display it, we can pass query parameter but cannot pass body in get API.
app.get('/',async (req, resp) => {
    let db = dbConnect();
    const result = await (await db).find({'name':'harsh'}).toArray();
    resp.send(result);
})



app.listen(5000);
