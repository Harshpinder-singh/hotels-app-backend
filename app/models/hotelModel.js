const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Schema = mongoose.Schema
const hotelSchema = new Schema({
    address: {
        type: String
    },
    categories: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    name: {
        type: String
    },
    postalCode: {
        type: String
    },
    province: {
        type: String
    },
    reviewsRating: {
        type: String
    },
    reviewsText: {
        type: String
    },
    reviewsTitle: {
        type: String
    },
    reviewsUsername: {
        type: String
    }

})
hotelSchema.index({
    address: 'text',
    postalCode: 'text',
    name: 'text',
    country: 'text',
    city: 'text',
    province: 'text',
})
hotelSchema.plugin(mongoosePaginate)


const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel