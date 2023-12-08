import { useParams } from "react-router-dom"
import useRestaurantMenu from "./Utils/useRestaurantMenu";
import Shimmer from "../Shimmer";
import { CDN_IMG_URL } from "./Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "./Utils/cartSlice";
import { useContext } from "react";
import userContext  from "./Utils/userContext";

const RestaurantDetails = () =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const {addItem } = useContext(userContext);
    const menu_data = useRestaurantMenu(id);
    if (menu_data === null) return <Shimmer />;
    console.log("menu_data",menu_data);

    // const itemCards = menu_data[0]?.menuItems;

    
    const itemCardss = menu_data?.data?.cards[2]
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) =>{
        return (item.card.card.itemCards!==undefined)
    }).map((item) =>{
        return item.card.card.itemCards
    })


    console.log("itemsCards",itemCardss);

   

    const handleAddItem = (item) =>{
        addItem(item)
        dispatch(addItem)
    }
    return(
        <>
        <h1>RestaurantDetails</h1>  
        <h1>Restaurant Id:{id}</h1>
        <div>
        {itemCardss && itemCardss?.map((items)=>{
          return   items.map((item)=>{
                return(
                    
                    <li key = {item.card.info.id}>
                     <h1>{item.card.info.name}</h1>
                     <div className="text-lg font-semibold"><button 
                     onClick={() => handleAddItem(item)}>add</button></div>
                 
                 <img src={CDN_IMG_URL +item.card.info.imageId
} className="w-full" />
</li>          
                )
            })

        })}
        </div>
        </>
    )   
}
export default RestaurantDetails