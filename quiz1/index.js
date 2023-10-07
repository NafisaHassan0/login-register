const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const Restaurant = require("./models/restrauntModel.js");
const { Meal, Foods: Food } = require("./models/mealModel.js");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.listen(3000, () => console.log("server on!"));

mongoose.connect(
  "mongodb+srv://admin:admin@clusternafisa.fttsp9k.mongodb.net/mycontacts-backend"
);

app.get("/insert-dummy", async (req, res) => {
  const restraunt1 = new Restaurant({
    resid: 1,
    name: "ginsouy",
    description: "gvjhfjksfnen",
    website: "dsskjdjskjf",
    address: "bhshkjehgkl",
    phone: "905869758",
  });
  const restraunt2 = new Restaurant({
    resid: 1,
    name: "ginsouy",
    description: "gvjhfjksfnen",
    website: "dsskjdjskjf",
    address: "bhshkjehgkl",
    phone: "905869758",
  });

  const meal1 = new Meal({ calories: 500 });
  const meal2 = new Meal({ calories: 800 });
  const f1 = new Food({ name: "biryani", mb: true });
  const f2 = new Food({ name: "qorma", mb: false });
  const f3 = new Food({ name: "pasta", mb: true });
  const f4 = new Food({ name: "lasagna", mb: true });

  meal2.food.push(f3._id);
  meal2.food.push(f4._id);
  meal1.food.push(f1._id);
  meal1.food.push(f2._id);

  restraunt1.meals.push(meal1);
  restraunt1.meals.push(meal2);

  await f1.save();
  await f2.save();
  await f3.save();
  await f4.save();
  await meal1.save();
  await meal2.save();
  await restraunt2.save();
  await restraunt1.save();

  res.send("Dummy data inserted!");
});
app.get("/restraunt", async (req, res) => {
  const restaurant = await Restaurant.find();
  res.json(restaurant);
});
app.get("/restrauntdeets", async (req, res) => {
  const restaurant = await Restaurant.find().populate({
    path: "meals",
    populate: {
      path: "food",
      model: "Foods",
    },
  });
  res.json(restaurant);
});
