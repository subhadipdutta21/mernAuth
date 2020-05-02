const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth-controller')
const userController = require('../controllers/user-controller')

router.post('/register',authController.register )
router.post('/login', authController.login)
router.get('/allusers',userController.getAllUsers)

module.exports = router

