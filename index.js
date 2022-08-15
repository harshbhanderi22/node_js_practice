const { response } = require('express');
const dbConnect = require('./mongodb');


//Handling promise in one way
// dbConnect().then((resp) => {
//       resp.find().toArray().then((data) => {
//             console.log(data);
//       })
// })

//We can handle promise in this way also. It is a common practice developers follow.
const main = async () => {

      //Await to connect database
      let data = await dbConnect();

      //await to fetch data and convert it in array form
      //pass argunment in find to read specific data or put empty bracket() to get all data
      let response =await data.find({role:'broker'}).toArray();
      console.log(response);
}

main();

