
const express = require('express');

const data = require('../data/products')

const routeConstants = require('../routes/routeConstants')

const router = express.Router();



router.get('/add-product',(req,res) => {
    res.render('add-product',{routeConstants: routeConstants, path: routeConstants.AddProduct, pageTitle: 'Add Products'} )
})

router.post('/add-product',(req,res) => {
    
    data.products.push(req.body)
    console.log(data.products)
    res.redirect('/');
})

exports.routes = router;