
const express = require('express');

const data = require('../data/products')

const routeConstants = require('../routes/routeConstants')

const router = express.Router();



router.get('/add-product',(req,res) => {
    //res.sendFile(path.join(root,'../', 'views','add-product.html'))
    res.render('add-product',{routeConstants: routeConstants, path: routeConstants.AddProduct, pageTitle: 'Add Products'} )
})

router.post('/add-product',(req,res) => {
    
    data.products.push(req.body)
    console.log(data.products)
    res.redirect('/');
})

exports.routes = router;