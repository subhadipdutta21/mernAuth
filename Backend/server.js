const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('config')

const uri = config.get('URI')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (!err) {
        console.log('MongoDB connected')
        app.listen(5000)
    }
    else console.log(err)
})

const userRoute = require('./routes/Users')
const todoRoute = require('./routes/Todos')
app.use('/users', userRoute)
app.use('/todos', todoRoute)



