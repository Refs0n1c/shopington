const routeConstants = require('../routes/routeConstants')

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
    data.products.push(req.body)
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    res.render('shop', {
        prods: data.products,
        routeConstants: routeConstants,
        pageTitle: 'Shop Ahoy!',
        path: routeConstants.Shop,
        hasProducts: data.products.length > 0
    }
    )
};