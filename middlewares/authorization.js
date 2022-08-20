const Users = require('../models/users')
const ROLES = require('../config/roles')

async function authAdmin(req, res, next) {
    try {
        const loggedUser = req.loggedUser;
        const user = await Users.findById(loggedUser._id)
        if (user) {
            if (user.role == ROLES.ADMIN) {
                next()
            } else {
                throw {
                    name : 'NoAccess'
                }
            }
        } else {
            throw {
                name : 'NoAccess'
            }
        }
    } catch (err) {
        next(err)
    }
}

async function authUser(req, res, next) {
    try {
        const id = req.params.id;
        const loggedUser = req.loggedUser;
        const user = await Users.findById(loggedUser._id)
        if (user) {
            if (user.role == ROLES.ADMIN || loggedUser._id === id) {
                next()
            } else {
                throw {
                    name : 'NoAccess'
                }
            }
        } else {
            throw {
                name : 'NoAccess'
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { authAdmin, authUser };