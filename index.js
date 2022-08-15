const { MongoClient } = require('mongodb');
//or we can use const mongoclient = reuire('mongodb').MongoClient

//URL of our databse
const url = "mongodb://localhost:27017"

//Connection our client(Node) with server(MongoDB) with given url
const client = new MongoClient(url);

//Created function to get Data
async function getData() {

      //Connect with client
      let result = await client.connect();

      //Connect our client with given database
      let db = result.db('login');

      //Fetch the given collection our from database
      let collection = db.collection('users');

      //Fetch the data from given collection in array form
      let response = await collection.find({}).toArray();
      console.log(response);
}

getData()