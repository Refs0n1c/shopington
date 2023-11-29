//mongo now

const mongo = require('mongodb')
let _db;
const MongoClient = mongo.MongoClient;

const mongoConnect = (callBack) =>{
  MongoClient.connect('mongodb+srv://danielrefson2306:tubby@nodecluster.hwx7v2k.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!')
    _db = client.db();
    callBack();
  }).catch(err => {
    console.log(err)
    throw err;
  })

}

const getDb = ()=>{
  if(_db){
    return _db
  }

  throw 'No Db Found!'
 
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
