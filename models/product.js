const data = require('../data/products');
module.exports = class Product {
    constructor(title, price, description){
        this.title = title,
        this.price = price,
        this.description = description
    }

    save(){
        data.products.push(this)
    }

    static getAll(){
        return data.products
    }
}