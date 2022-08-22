const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//it is middleware which is used to parse incoming requests in JSON format
app.use(express.json());

//Get API to get data from our databse and display it, we can pass query parameter but cannot pass body in get API.
app.get('/',async (req, resp) => {
    let db = dbConnect();
    const result = await (await db).find({ 'name': 'harsh' }).toArray();
    console.log(result);
    resp.send(result);
})

// Post API is used to add data to database, we can pass data from postman or from nodejs directly
// We can pass same path in get and post method, it will not conflict anything
app.post('/', async (req, resp) => {
    let database = dbConnect();
    let result =await (await database).insertOne(req.body)
    console.log(result);
    resp.send(result);
})


app.put('/', async (req, resp) => {
    const database = dbConnect();
    const result = await (await database).updateOne(
        {"name":"sanket"},
        {$set:{ 'role':'broker'}}
    )
    console.log(result);
    resp.send(result);
})

app.delete('/', async (req, resp) => {
    const database = dbConnect();
    //Rather than other parameters, we can use id from database which can be passed in paramas
    //Example, const result = await database.deleteOne(_id = new monglodb.ObjectId(req.params.id))
    const result =await (await database).deleteOne(
        {"name":"sanket"}
    )
    resp.send(result);
})


app.listen(5000);
