const express= require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
mongoose.connect(
    "mongodb+srv://zwigato:zwigato123@cluster0.brl8pke.mongodb.net/"
);

const db = mongoose.connection;

db.on("error",()=>{
    console.log("connection not successful")
});
db.on("open",() =>{
    console.log("connection is successful");
})

app.listen("5000",()=>{
   console.log("server is running on port 5000")
})

app.get("/",(req,res)=>{
   res.send("learning nodejs")
})

require("./Routes/restaurant.routes")(app);
    // app.post("/api/restaurants",async (req,res) =>{

    //     console.log("request body",req.body)
    //     // const {name,avgRating,cloudinaryImageId,cuisines,costForTwo,menuItems} = req.body;
    
    //     // const newRestaurant = new restaurantModel({
    //     //     name,
    //     //     avgRating,
    //     //     cloudinaryImageId,
    //     //     cuisines,
    //     //     costForTwo,
    //     //     menuItems
    //     // });
    //     // restaurantModel.insertMany(newRestaurant).then((data) =>{ if(!data){
    //     //     res.status(400).send("something went wrong");
    //     // }
    //     try{
    //         const rest = await restaurantModel.insertMany(req.body)
    //         console.log(rest);
    //         res.send(rest);
    //     }
    //     // console.log(data);
    //     // res.send(data)  
    //     catch(e){
    //         console.log(e);
    //     }
    // })