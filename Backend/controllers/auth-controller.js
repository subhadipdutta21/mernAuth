const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
let Users = require('../models/Users')

const register =(req,res)=> {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        date: new Date()
    }

    // checking if the user is already exists with same email
    Users.findOne({
        email: req.body.email
    }).then(user => {
        if (user) res.json({ error: 'User exists' })
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                Users.create(userData)
                    .then(user => res.json({ status: user.email + ' registered successfully' }))
                    .catch(err => res.send('error ' + err))
            })
        }
    }).catch(err => res.send('error ' + err))
}

const login = (req,res) => {
    Users.findOne({
        email: req.body.email
    }).then(user => {
        console.log(user)
        if (!user) res.json({ error: 'User does not exist' })
        else {
            //comparing the password
            if(bcrypt.compareSync(req.body.password, user.password)) {  
                // passswords match
                const payload = {
                    id : user._id
                }

                jwt.sign(payload, config.get('jwtSecret'),(err,token)=>{
                    if(err) throw err
                    res.send({token,user})
                })
            } else res.send({error : "wrong password"})
        }
    }).catch(err=> res.send('error '+err))
}

exports.login = login
exports.register = register