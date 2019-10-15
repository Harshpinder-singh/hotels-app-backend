const Hotel = require('../models/hotelModel')
const fs = require('fs')
const csv = require('fast-csv')



module.exports.fullSearch = (req, res) => {
    const term = req.query.search
    const options = req.body

    Hotel.paginate({ $text: { $search: term } }, options)
        .then(result => {
            res.json(result.docs)
        })
        .catch(err => {
            res.json(err)

        })

}
module.exports.show = (req, res) => {
    const id = req.params.id
    Hotel.findOne({ _id: id })
        .then(hotel => {
            if (hotel) {
                res.json(hotel)
            }
            else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.list = (req, res) => {
    const options = req.body
    Hotel.paginate({}, options)
        .then(result => {
            res.json(result.docs)
        })
        .catch(err => {
            res.json(err)
        })
}
const array = []

module.exports.csvUpload = function (req, res) {
    csv.parseFile(req.file.path)
        .on('error', error => console.error(error))
        .on("data", function (data) {
            array.push(data)
            // push each row
        })
        .on("end", function () {

            fs.unlinkSync(req.file.path)
            array.shift()

            for (let i = 0; i < array.length; i++) {

                const hotel = new Hotel({ address: array[i][1], categories: array[i][2], city: array[i][3], country: array[i][4], latitude: array[i][5], longitude: array[i][6], name: array[i][7], postalCode: array[i][8], province: array[i][9], reviewsRating: array[i][10], reviewsText: array[i][11], reviewsTitle: array[i][12], reviewsUsername: array[i][13] })
                hotel.save()
                    .then(() => {

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            // remove temp file
            //process "fileRows" and respond
        })
}