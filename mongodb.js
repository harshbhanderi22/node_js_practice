const { MongoClient } = require('mongodb');
//or we can use const mongoclient = reuire('mongodb').MongoClient

//URL of our databse
const url = "mongodb://localhost:27017"

//Connection our client(Node) with server(MongoDB) with given url
const client = new MongoClient(url);

//Crearted Function for connectivity of database
async function dbConnect() {

      //Connect with client
      let clientConnect = await client.connect();

      //Connect our client with given database
      let db = clientConnect.db('login');

      //Fetch the given collection our from database
      return db.collection('users');
}

//Export result of dbConnect
module.exports = dbConnect;

