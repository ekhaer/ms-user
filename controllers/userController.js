const Users = require('../models/users')

class UserController {
    static async findAll(req, res, next) {
        try {
            let queue;
            if (req.query.name) {
                const name = req.query.name;
                // queue = await Queue.findByName(name)
            } else {
                queue = await Users.find()
            }
            res.status(200).json(queue)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async add(req, res, next) {
        try {
            let newUser = req.body
            const user = await Users.add(newUser)
            res.status(201).json(user)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateUser = req.body;
            const user = await Users.update(id, updateUser)
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async findOne(req, res) {
        try {
            const id = req.params.id
            const user = await Users.findById(id)
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.id
            const user = await Users.delete(id)
            res.status(200).json(user)
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = UserController