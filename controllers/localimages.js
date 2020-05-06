const Model = require('../models/Localimages');
const toJson = require('unsplash-js').toJson;
const UnSplash = require('../models/Unsplash');
const mongoose = require('mongoose')

exports.storeimages = (req, res) => {
    const response = UnSplash.GetImages()
    
    response.then(toJson).then(rawdata => {

        const response = Model.SaveImages(rawdata)
        response .then(result => {
            console.log(result)
            res.send('Successfully stored images in DB')
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error Occured',
                error: err
            })
        })
    })

}

exports.getimages = (req,res) => {

    const response = Model.GetImages('5ead4f074bc8b1823816f51f')
    response.then(rawdata=> {
        var data = [];
        rawdata.images.forEach(image=> {
            data.push({
                "id": image['id'],
                "description": image['description'],
                "alt_description": image['alt_description'],
                "urls": {
                    "regular": image.urls['regular']
                }
            })
        })
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not retreive Images',
            error: err
        })
    })
    
}