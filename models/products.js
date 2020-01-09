const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productUseOrNot: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tbl_products', userSchema);