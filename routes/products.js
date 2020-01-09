const express = require('express');
const Product = require('../models/products');
const router = express.Router();

router.post('/addProducts', (req, res, next) => {
    Product.create({
        productName: req.body.productName,
        productImage: req.body.productImage,
        productPrice: req.body.productPrice,
        productUseOrNot: req.body.productUseOrNot
    }).then((products) => {
        res.json({ status: "Product Added Successfully"});
    }).catch(next);
});

router.get('/products',(req,res,next)=>{
    Product.find({},(err,products)=>
    {
        if(err){
            res.json(next)
        }
        res.json(products)
    });
})



module.exports = router;
