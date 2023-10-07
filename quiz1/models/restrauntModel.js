const mongoose = require("mongoose");

// Define a schema for the restaurant
const restaurantSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  phone: {
    type: String,
    required: true,
  },
  meals: [{ type: mongoose.Types.ObjectId, ref: "Meal" }],
});

// Create a model using the schema
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
