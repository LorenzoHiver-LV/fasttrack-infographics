const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    ifIWas: {
        type: String,
        required: true
    },
    incredible: {
        type: String,
        required: true
    },
    skills: [{
        name: String,
    }],
    hobbies: [{
        name : String,
    }],
    chinesePortrait: [String],
});

const Partner = mongoose.model('partner', partnerSchema);

module.exports = Partner;
