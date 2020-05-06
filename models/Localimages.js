const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const LocalimagesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    images: Array
});

var LocalImages_Model = mongoose.model('Localimages', LocalimagesSchema)

exports.GetImages = function(id) {
    
    return LocalImages_Model.findById(id)
    
}


exports.SaveImages = function(rawdata) {
    const localimages = new LocalImages_Model({
        _id: new mongoose.Types.ObjectId(),
        images: rawdata
    })
    
    return localimages.save()
} 

