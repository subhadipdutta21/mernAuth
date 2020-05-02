const Users = require('../models/Users')

const getAllUsers = (req,res) => {
    Users.find().then(user => {
        console.log(user)
        res.status(200).send(user)
    }).catch(err => res.send('err' + err))

    // Users.updateMany()
}




exports.getAllUsers = getAllUsers