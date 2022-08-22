const mongoose = require('mongoose');

const main = async () => {
      await mongoose.connect('mongodb://localhost:27017/login')
      
      //It is used to create rules, due to below code, we will be only able to enter name in our database.
      const LoginSchema = mongoose.Schema(
            {
                  name:String
            }
      )

      //Model is used to use schema and enter data with it.
      //It takes two parameters, name of table and defined schema for it.
      const LoginModel = mongoose.model('user', LoginSchema);

      //To add data in table defined in model.
      //This line will only add name in table as only name field is defined in schema. type field will be ignored
      const data = new LoginModel({ 'name': 'python', 'type':'programing language' })
      //Save data through model.
      const result =await data.save();
      console.log(result);
}

main();