const data = require('../data/products');
const Entity = require('./entity');
let id = 1;
module.exports = class Product extends Entity {
    constructor(title, price, description){
        super(id)
        this.title = title,
        this.price = price,
        this.description = description
        id++
    }

    save(){
        data.products.push(this)
    }

    static getAll(){
        return data.products
    }
}