import { useEffect, useState } from "react"
import { menu_API } from "./mock data"


const useRestaurantMenu = (resId) =>{
    // fetchdata
const[restaurant,setResInfo]= useState(null);


useEffect(() => {
fetchData()
},[])

const fetchData = async () =>{

    const data = await fetch (menu_API+resId)
    const json = await data.json()
    setResInfo(json.data) 
}

return restaurant;

}

export default useRestaurantMenu ;