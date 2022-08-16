//Import Database connectivity
const dbConnect = require('./mongodb');

const insertdata = async () => {

    //Get connected database
    const db = await dbConnect();

    //Insert Data
    //For inserting multiple data just use array, in [ ], define multiple objects same as below
    const result = await db.insert(
        {
            'name': 'harsh',
            'email': 'email@gmail.com',
            'role': 'broker'
        }
    )

}

insertdata();