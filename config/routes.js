const multer = require('multer')
const express = require('express')
const router = express.Router()
const hotelController = require('../app/controllers/hotelController')
const upload = multer({ dest: 'tmp/csv/' })


router.post('/hotels', hotelController.fullSearch)
router.post('/data', hotelController.list)


router.get('/hotels/:id', hotelController.show)
router.post('/file', upload.single('file'), hotelController.csvUpload)

module.exports = router