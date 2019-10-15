const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/hotel')
    .then(() => {
        console.log('connectde to db')

    })
    .catch((err) => {
        console.log(er)
    })

module.exports = mongoose