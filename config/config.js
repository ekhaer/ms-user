const { MongoClient } = require('mongodb');
const URI_DB = process.env.URI_DB;

let database = null

async function connect() {
    try {
        const uri = URI_DB
        const client = new MongoClient(uri, {useUnifiedTopology: true})
        await client.connect()
        const db = await client.db('dealljob');
        database = db
        return db 
    } catch (error) {
        console.log("error ini ", error)
    }
}

function getDb() {
    return database
}

module.exports = {connect, getDb}
