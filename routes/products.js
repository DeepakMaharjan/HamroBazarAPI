const express = require('express');
const Product = require('../models/products');
const router = express.Router();

router.post('/addProducts', (req, res, next) => {
    Product.create({
        productName: req.body.productName,
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productUseOrNot: req.body.productUseOrNot

    }).then((product) => {
        res.json({ status: "Product Added Successfully"});
    }).catch(next);
});

router.get('/allProducts',(req,res,next)=>{
    Product.find({},(err,product)=>
    {
        if(err){
            res.json(next)
        }
        res.json(product)
    });
})

module.exports = router;
