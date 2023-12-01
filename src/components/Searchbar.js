import { useState } from "react";
const Searchbar = ({filteredData,setFilteredRestaurants}) => {
  const [searchText, setSearchText] = useState(""); //isme phli value empty string h or dusri
  // value vo set karde jo ham le rhe h tho basically m filter tho 
  //jabi lagaunga na jab mere pass vo value hogi jisse merer ko restaurant ko match karna h


  

  const filterRestaurants = ()=>{

    const filteredsearchData = filteredData.filter((restaurant) =>
         restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()))

         setFilteredRestaurants(filteredsearchData);
   
 }
  return (
    <>
      <div className="border border-solid border-black inline-block my-3">
        <input type="search" placeholder="search here!!" onChange = {(e) => setSearchText(e.target.value)}/>
        {/* //on change basically vo value lega jo hame search karni h.so here in input some changes are happening and I want that value */}
      </div>
      <button onClick = {filterRestaurants}>Search</button>
      {/* //now ab as soon as I click on this button I need to filter karte hue chalo usko. tho onClick m hme filtermethod dalna hoga */}
    </>
  );
};
export default Searchbar;

