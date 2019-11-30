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
    if (!err) console.log('MongoDB connected')
    else console.log(err)
})

const userRoute = require('./routes/Users')
const todoRoute = require('./routes/Todos')
app.use('/users', userRoute)
app.use('/todos', todoRoute)


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('Server running on port ' + port)
})
