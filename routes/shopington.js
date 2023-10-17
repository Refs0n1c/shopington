const path = require('path');
const data = require('../data/products')
const express = require('express');

const router = express.Router();

const root = require('../util/path')

router.get('/',(req,res,next) => {
    console.log(data.products);
    res.sendFile(path.join(root,'../', 'views','shop.html'))
});

module.exports = router;