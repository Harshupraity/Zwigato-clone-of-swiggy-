const mongoose = require("mongoose");
const restaurantSchema = mongoose.Schema({
    name: String,
    avgRating:String,
    cuisines:Array,
    cloudinaryImageId:String,
    costForTwo:String,
    menuItems:Array 
    //for id mongoose itself defines the unique id for every element.
})

const restaurantModel = mongoose.model("restaurants",restaurantSchema);
module.exports = restaurantModel;   