const express = require('express')
const router = express.Router()

const Todos = require('../models/Todos')

// create todo
router.post('/createtodo', (req, res) => {
    const todoData = {
        description: req.body.desc,
        responsible: req.body.res,
        priority: req.body.priority,
        isCompleted: req.body.isCompleted
    }

    Todos.create(todoData).then(data => {
        res.json({ status: 'Added successfully' })
    }).catch(err => res.send('error ' + err))
})

// get all todos
router.get('/alltodos', (req, res) => {
    Todos.find().then(todos => res.json(todos)).catch(err => res.send(err))
})

// get single todo
router.get('/:id', (req, res) => {
    Todos.findById(req.params.id).then(todo => res.json(todo)).catch(err => res.send(err))
})

// update todo
router.post('/update/:id', (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, {
        description: req.body.desc,
        responsible: req.body.res,
        priority: req.body.priority,
        isCompleted: req.body.isCompleted
    }).then(todo => res.json(todo)).catch(err => res.send(err))
})

module.exports = router
