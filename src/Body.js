import React from 'react';
// import data from "./components/Utils/restaurants"
import Cards from './components/Cards';
import Searchbar from './components/Searchbar'
import { useState,useEffect } from 'react';
import TopRatedRestaurants from './components/TopRatedRestaurants';
import Shimmer from './Shimmer';
// import useOnline from './components/Utils/useOnline';
import { Link } from 'react-router-dom';
// import axios from 'axios';
const Body= ()=>{

  
  
    // const[filteredData, setFilteredData] = useState(data);
    // const handleFilter  = (e) =>{
    //     setFilteredData(e);
    // }
    const [allRestaurants,setAllRestaurants] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    //ye ham isliye kar rhe
    // h kyuki search k time par vo filter sare cards m se kar rha h tho filter highlight tho
    //ho rhe h par baad baki bhi dikh rhe h isliye hame sirf wahi chaiye .

    const handleChange = (TopRatedRestaurants) => {
        setFilteredRestaurants(TopRatedRestaurants);
    }
      // function filterTopRatedRestaurants({rest}){
      //     setFilteredRestaurants(rest);
      // }
      
  const [show,setShow] = useState(false);
 useEffect ( () =>{
  
  async function fetchData(){
    const datah = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const response = await datah.json();


    //optional chaining.
   setFilteredRestaurants(
    response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
   )

    setAllRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  
  }
 

  // if(!online){
  //   return <h1>Please check your Internet Connection</h1>
  // }else{

  // }
  // console.log("filtered restaurant h",filteredRestaurants);
    console.log("useEffect is called");
    fetchData();
  },[]);

    return(
    <div>
          <div>
          <Searchbar filteredData = {allRestaurants} setFilteredRestaurants={setFilteredRestaurants} />
        </div>
        <div>
        {(filteredRestaurants ) &&
       (<TopRatedRestaurants handleChange = {handleChange} filteredRestaurants= {filteredRestaurants} />) 
        }
        </div>
      
       

      {/* conditional rendering */}
       {
         filteredRestaurants && filteredRestaurants.length === 0 ?(
          <Shimmer/>
        ):(
          <div className="hcard">
          {
          filteredRestaurants?.map((restaurantsss) =>(
            <Link to ={`/restaurant/${restaurantsss.info.id}`}>
               <Cards key = {restaurantsss.info.id} 
          details = {restaurantsss.info}/>
          {/* //details is an object with different values. */}
            </Link>
         
         ) )
         }
      </div>
        )
       } 
    </div>
    )
}
export default Body;
