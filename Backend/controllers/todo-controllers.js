const Todos = require('../models/Todos')

// create todo
const createTodo = (req, res) => {
    const todoData = {
        description: req.body.desc,
        responsible: req.body.res,
        priority: req.body.priority,
        isCompleted: req.body.isCompleted
    }

    Todos.create(todoData).then(data => {
        res.json({ status: 'Added successfully' })
    }).catch(err => res.send('error ' + err))
}

// get all todos
const getAllTodos = (req, res) => {
    Todos.find().then(todos => res.json(todos)).catch(err => res.send(err))
}

// get single todo
const getSingleTodo = (req, res) => {
    Todos.findById(req.params.id).then(todo => res.json(todo)).catch(err => res.send(err))
}

// update todo
const updateTodo = (req, res) => {
    Todos.findByIdAndUpdate(req.params.id, {
        description: req.body.desc,
        responsible: req.body.res,
        priority: req.body.priority,
        isCompleted: req.body.isCompleted
    }).then(todo => res.json(todo)).catch(err => res.send(err))
}



exports.createTodo = createTodo
exports.getAllTodos = getAllTodos
exports.getSingleTodo = getSingleTodo
exports.updateTodo = updateTodo
