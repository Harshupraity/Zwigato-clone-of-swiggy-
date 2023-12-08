import { createContext } from "react";

const userContext = createContext({
    loggedInUser:'default user',

    items:[],
    addItem: (item) =>{
        item.push(item);
    },
})
export default userContext;