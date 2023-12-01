import { useParams } from "react-router-dom"
import useRestaurantMenu from "./Utils/useRestaurantMenu";
import Shimmer from "../Shimmer";
const RestaurantDetails = () =>{


    const {id} = useParams();
    const menu_data = useRestaurantMenu(id);
    if (menu_data === null) return <Shimmer />;
    console.log("menu_data",menu_data);

    // const itemCards = menu_data[0]?.menuItems;


    const itemCards = menu_data?.data?.cards[2]
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


    console.log("itemsCards",itemCards);
    return(
        <>
        <h1>RestaurantDetails</h1>  
        <h1>Restaurant Id:{id}</h1>
        <div>
        {itemCards && itemCards?.map((item)=>{
            return (
                <>
               <li key = {item.card.info.id}>
                <h1>{item.card.info.name}</h1>
            </li>
            <div className="text-lg font-semibold"><button >add</button></div>
            
            </>
            )
        })}
        </div>
        </>
    )   
}
export default RestaurantDetails