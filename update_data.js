const dbConnect = require('./mongodb')

const updateData = async () => {
    const db = await dbConnect();
    
    //We can use updateOne  as well
    const result = await db.update(
        { 'name': 'harsh' }, {
            $set:{'mobile':'98485484'}
        }
    )
    console.log(result);
}

updateData();