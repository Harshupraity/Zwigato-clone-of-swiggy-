const restaurantModel = require("../model/restaurants.model")
exports.create = async (req,res) =>{

    console.log("request body",req.body)
    // const {name,avgRating,cloudinaryImageId,cuisines,costForTwo,menuItems} = req.body;

    // const newRestaurant = new restaurantModel({
    //     name,
    //     avgRating,
    //     cloudinaryImageId,
    //     cuisines,
    //     costForTwo,
    //     menuItems
    // });
    // restaurantModel.insertMany(newRestaurant).then((data) =>{ if(!data){
    //     res.status(400).send("something went wrong");
    // }
    try{
        const rest = await restaurantModel.insertMany(req.body)
        console.log(rest);
        res.send(rest);
    }
    // console.log(data);
    // res.send(data)  
    catch(e){
        console.log(e);
    }
}
// .catch(err=>res.status(500).json({message:"server is not available"}))
// }

exports.fetch = (req,res) =>{
    //.find return a promise so we can use .then and .catch also in this.
    restaurantModel.find().then((data)=>{
        if(!data){
            res.status(404).json({message:"Data not found"});
        }
        res.send(data);
    })
    .catch((err)=>res.status(500).json({message:"server not available"}));
};

exports.fetchOne = (req,res) ={

}