const express = require('express')
const {connect} = require('./config/config')
const app = express()
const PORT = process.env.PORT || 4001
const UserRouter = require('./routes/userRoute')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({ extended : false }))
app.use(express.json())
app.use(cors())


app.get('/', async (req, res) => {
    res.send('okei')
})

app.use('/users', UserRouter)
app.use(errorHandler)

connect()
    .then(async (db) => {
        console.log('mongodb is connected successfully')
        database = db
        app.listen(PORT, () => console.log('connected to port: ' + PORT))
    })
