const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profileImage: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    areaLocation: {
        type: String,
        required: true
    },
    cityName: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tbl_user', userSchema);