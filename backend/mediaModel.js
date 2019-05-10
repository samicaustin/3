const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    approved: {type: Boolean, required: true},
    title: {type: String, required: true},
    type: {type: String, required: true},
    creator: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    // fiction: Boolean,
    // link: String,
    // keywords: Array,
    // forFansOf: Array,
    // access: String,
    // triggers: Array,
    // findOn: String
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;