const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const accountsRoutes = require('./routes/accounts')

app.use('/accounts', accountsRoutes)

const port = 5000

app.listen(port, () => {
    console.log("listening on port:", port)
})