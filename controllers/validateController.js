const Users = require('../models/users')

class ValidateController {
    static async isValid(req,res,next) {
        try {
            let data = req.body
            //find username first
             const users = await Users.findByName(data.username)
             if (users.length !== 0) {
                 users[0].isValid = true
                 res.status(200).json(users[0])
             } else {
                res.status(200).json( { isValid : false })
             }
         } catch (error) {
             console.log(error)
             next(error)
         } 
    }
}

module.exports = ValidateController