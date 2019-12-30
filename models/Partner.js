const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true
    },
    ifIWas: {
        type: String,
        required: true
    },
    skills: [String],
    hobbies: [String],
    chinesePortrait: [String],
});

var Partner = mongoose.model('partner', partnerSchema);

module.exports = Partner;