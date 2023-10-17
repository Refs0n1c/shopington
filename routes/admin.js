const path = require('path');

const express = require('express');

const root = require('../util/path')

const data = require('../data/products')

const router = express.Router();



router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(root,'../', 'views','add-product.html'))
})

router.post('/add-product',(req,res) => {
    
    const dataAsObject = req.body
    data.products.push(dataAsObject)
    console.log(data.products)
    res.redirect('/');
})

exports.routes = router;