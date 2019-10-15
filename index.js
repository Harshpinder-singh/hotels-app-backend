const express = require('express')
const app = express()
const router = require('./config/routes')
const mongoose = require('./config/database')
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use('/', router)






app.listen(3005, () => {
    console.log('server listening 3005')
})