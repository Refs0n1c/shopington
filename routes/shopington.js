const path = require('path');
const data = require('../data/products')
const express = require('express');

const router = express.Router();

const root = require('../util/path')

router.get('/',(req,res,next) => {
    
    res.render('shop',{prods: data.products, docTitle: 'Shop Ahoy!'});
});

module.exports = router;