const routeConstants = require('../routes/routeConstants')
const Product = require('../models/product')

const data = require('../data/products')

exports.getAddProduct = (req, res) => {
    res.render('add-product',
        {
            routeConstants: routeConstants,
            path: routeConstants.AddProduct,
            pageTitle: 'Add Products'
        })
}

exports.postAddProduct = (req, res) => {
    const { title, price, description } = req.body;
    const product = new Product(title,price,description)
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    var products = Product.getAll();
    res.render('shop', {
        prods: products,
        routeConstants: routeConstants,
        pageTitle: 'Shop Ahoy!',
        path: routeConstants.Shop,
        hasProducts: data.products.length > 0
    }
    )
};