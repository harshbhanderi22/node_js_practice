const dbConnect = require('./mongodb');

const deleteData = async () => {
    const db = await dbConnect();
    const result = await db.deleteOne(
        {'role':'broker'}
    )
    console.log(result)
}

deleteData();