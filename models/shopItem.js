const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shopItemSchema = new Schema({
  name:  {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const ShopItem = mongoose.model('ShopItem', shopItemSchema);
module.exports = ShopItem;