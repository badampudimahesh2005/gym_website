
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // Initially storing image URL as string
  category: String,
  inStock: Number,
});


const Product=mongoose.model('Product', productSchema);
module.exports = Product;