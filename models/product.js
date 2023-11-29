const getDb = require('../util/database').getDb;
const mongoDb = require('mongodb')
class Product {
  constructor(tital, price, description, imageURL) {
    this.tital = tital,
      this.price = price,
      this.description = description,
      this.imageURL = imageURL;
  }
  save() {
    const db = getDb();
    return db.collection('products').insertOne(this)
    .then(result => {
      console.log(this)
      console.log(result)
    }).catch(err => {
      console.log(err)
    });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products')
    .find()
    .toArray()
    .then(prods =>{
      console.log(prods)
      return prods;
    })
    .catch(err => {
      console.log(err);
    });
  }


static fetchProductById(id){
  const db = getDb();
  return db.collection('products')
  .find({_id: new mongoDb.ObjectId(id)})
  .next()
  .then(prod =>{
    console.log(prod)
    return prod;
  })
  .catch(err => {
    console.log(err);
  });
}
}

module.exports = Product;
