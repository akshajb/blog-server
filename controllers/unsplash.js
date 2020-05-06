const toJson = require('unsplash-js').toJson
const UnSplash = require('../models/Unsplash')

exports.getimages = (req,res) => {
    const response = UnSplash.GetImages()
    response.then(toJson).then(rawdata => {
        res.send(rawdata)
    })
}