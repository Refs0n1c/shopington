const data = require('../data/products')
const express = require('express');
const routeConstants = require('../routes/routeConstants')

const router = express.Router();


router.get('/',(req,res) => {
    
    res.render('shop',{prods: data.products, routeConstants: routeConstants, pageTitle: 'Shop Ahoy!', path: routeConstants.Shop});
});

module.exports = router;