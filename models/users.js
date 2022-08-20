const { getDb } = require('../config/config')
const ObjectId = require('mongodb').ObjectID;

class Users {
    static async find() {
        return getDb().collection('users').find().toArray()
    }

    static async findByName(name) {
        return getDb().collection('users').find({"username" : {'$regex': name}}).toArray()
    }

    static async findById(id) {
        return getDb().collection('users').findOne({"_id" : ObjectId(id)})
    }

    static async add(newUser) {
        return getDb().collection('users').insertOne(newUser)
    }

    static async update(id, updateUser) {
        return getDb().collection('users').updateOne({"_id" : ObjectId(id)}, { $set : updateUser})
    }

    static async delete(id) {
        return getDb().collection('users').deleteOne({"_id" : ObjectId(id)})
    }
}

module.exports = Users