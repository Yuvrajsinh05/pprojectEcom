const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FashionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  products: [ProductSchema],
  subcategories: {
    men: [ProductSchema],
    women: [ProductSchema],
    kids: [ProductSchema],
  },
});

const Fashion = mongoose.model('Fashion', FashionSchema);

module.exports = Fashion;
