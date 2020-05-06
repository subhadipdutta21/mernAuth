const express = require('express')
const router = express.Router()
const verifyToken = require('../controllers/verifyTokenMiddleware')


const todoController = require('../controllers/todo-controllers')

// create todo
router.post('/createtodo',todoController.createTodo)

// get all todos
router.get('/alltodos',verifyToken,todoController.getAllTodos)

// get single todo
router.get('/:id', todoController.getSingleTodo)

// update todo
router.post('/update/:id', todoController.updateTodo)

module.exports = router
