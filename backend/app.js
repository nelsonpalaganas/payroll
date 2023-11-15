const express = require('express')
const route = require('./route/api/userRoutes')
const connectToMongoDB = require('./db')

const app = express()
connectToMongoDB

app.get('/' , (req,res) => res.send ('Hello World'))
app.use('/api/userRoutes', route)

const port = process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`));