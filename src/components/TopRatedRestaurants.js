

const TopRatedRestaurants = (props,{handleChange}) =>{

   console.log(props);
    const {filterTopRatedRestaurants,filteredRestaurants} = props
    console.log("Topratedrestaurant",filteredRestaurants);
    const filterRatingHandler = () =>{
        const TopRatedRestaurants =filteredRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >=4.4
        );
        // const dummyfunction = () =>{
        //     return   filterTopRatedRestaurants(TopRatedRestaurants);
        // }
        handleChange(TopRatedRestaurants)
        // filterTopRatedRestaurants(TopRatedRestaurants);
        console.log(typeof filterTopRatedRestaurants);
    }
    
 return (
        <button className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-orange-100 hover: bg-opacity-5 focus:outline-none focus:ring-0"
         onClick = {filterRatingHandler}>
            TopRatedRestaurants
        </button>
 )
}
export default TopRatedRestaurants;
