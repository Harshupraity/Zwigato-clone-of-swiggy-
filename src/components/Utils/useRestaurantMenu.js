import { useEffect ,useState} from "react"
import { MENU_API } from "./constants";
const useRestaurantMenu = (id) =>{

    const [menuData,setMenuData] = useState(null);
    useEffect(()=>{
        fetchApi();
    },[])

    const fetchApi = async () =>{
        const data = await fetch( MENU_API+id)
        const responseh = await data.json();
        console.log(responseh);
        setMenuData(responseh);

    } 
    return menuData;
}

export default useRestaurantMenu