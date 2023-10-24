import RestaurentCard from "./reastaurant";
import {resList} from "../utills/mock data";
import { useState } from "react";


const Body = () =>{

    const [restaurantList,setlistofRestauant]= useState (resList)

    
    

    return (
        <div className="body">
        <div className="search" onClick={() =>{
            const filterlist=restaurantList.filter(
                (rest)=> rest.info.avgRating >4
            )
            setlistofRestauant(filterlist)
        }}>Search</div>
        <div className="res-container">



        {restaurantList.map((restaurnat) => (
          <RestaurentCard key={restaurnat.info.id} resData={restaurnat} />)
        )}
</div>
</div>
    )
}


export default Body;