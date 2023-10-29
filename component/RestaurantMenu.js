import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [resInfo,setResInfo]= useState({});
    const [resMenuDetails,setResMenuDetails]=useState([])

    const {resId}= useParams()
    console.log(resId)


useEffect(()=>{
    fetchMenu()
},[])

const fetchMenu = async ()=>{
    const data= await fetch (
       " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json()

    console.log(json)
    setResInfo(json.data?.cards[0]?.card?.card?.info)

    console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

    setResMenuDetails(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)


}
// const{name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info.


// const{name,cuisines}= resInfo?.cards[0]?.card?.card?.info
// const {itemCards}= ;

// card?.info?.name


return(
    <div className='menu'>
        <h1>{resInfo.name}</h1>
        <h3>{resInfo.cuisines} -{resInfo.costForTwoMessage}</h3>

        <h2>Menu</h2>
        <ul>
          
          {resMenuDetails.map(item =>
           <li key={item.card.info.id}>
           {item.card.info.name} -{" Rs"} 
            {item.card.info.price/100}
           </li> )}
        </ul>
    </div>
  )
}

export default RestaurantMenu