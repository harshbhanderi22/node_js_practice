const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/login')

const LoginSchema = mongoose.Schema(
      {
            name: String,
            email: String,
            role:String
      }
)

//Same as main function just name changed from mongoose branch.
//This function is for saving/adding new data in database
const SaveInDB = async () => {

      //to define model for given table
      const LoginModel = mongoose.model('user', LoginSchema);

      //Adding data
      const data =await new LoginModel({
            name: 'deep',
            email: 'deep@gmail.com',
            role:'developer/broker'
      })

      //Save Data
      const result = await data.save();
      console.log(result);
}

//SaveInDB()

const UpdateInDB = async () => {
      const LoginModel = mongoose.model('user', LoginSchema);
      const data =await LoginModel.updateOne(
            { 'name': 'deep' },
            {
                  $set:{'email':'deep@bhanderiinfotech.com'}
            }
      )
       console.log(data);
}

//UpdateInDB();

const DeleteInDB = async () => {
      const LoginModel = mongoose.model('user', LoginSchema);
      const data = await LoginModel.deleteOne(
            {
                  'name':'deep'
            }
      )
      console.log(data);
}

//DeleteInDB();
 