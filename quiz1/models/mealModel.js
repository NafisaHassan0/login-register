const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  calories: {
    type: Number,
    required: true,
  },
  food: [{ type: mongoose.Types.ObjectId, ref: "Foods" }],
});

const foodsSchema = new mongoose.Schema({
  name: String,
  mb: Boolean,
});

const Meal = mongoose.model("Meal", mealSchema);
const Foods = mongoose.model("Foods", foodsSchema);

module.exports = { Meal, Foods };
