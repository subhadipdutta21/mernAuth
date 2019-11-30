const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    description: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    isCompleted: {
        type: Boolean
    }
})

const Todos = mongoose.model('Todos', TodoSchema)
module.exports = Todos