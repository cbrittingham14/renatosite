const mongoose = require('mongoose');
const db = require('../models');


const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/shamanicDB'), mongooseOptions);

const shopSeed = [
  {
    name: 'My single Item',
    imageURL: 'someurl',
    description: 'This is a beautiful piece of art',
    category: 'Jewelry',
    price: 200
  }
];

db.ShopItem.deleteMany({})
.then(() => db.ShopItem.collection.insertMany(shopSeed))
.then( data => {
  console.log(data.result.n + 'shop items inserted')
})
.catch(err => console.error(err));