import RestaurentCard, { withPromotedLabel } from "./reastaurant";
import {resList} from "../utills/mock data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utills/useOnlinestatus";


const Body = () =>{

    const [restaurantList,setlistofRestaurant]= useState ([]);
    const [searchText,setSearchtext]= useState ("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard)

    const onlineStatus = useOnlinestatus()
 if (onlineStatus === false)
 return (
<h1> you are offline!! check your Internet Pls ?</h1>
  )
   

    
    

    useEffect(()=>{
        getRestaurants();
    },[])


    async function getRestaurants() {
      
      try {
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const json = await data.json();
      
  
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
  
        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
 
        // update the state variable restaurants with Swiggy API data
        setlistofRestaurant(resData);
        setFilteredRestaurants(resData);
      } 
      catch (error) {
    
      }
    }    

    // useEffect(() => {
    //     fetchData();
    //   }, []);

      
    //   const fetchData = async () => {
    //     const data = await fetch(
    //       "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    
    //     const json = await data.json();



    

    return restaurantList===0 ?(<Shimmer/>): 

  (
        <div className="body">
        <div className="filter">
<div className="flex">
        <div className="Search m-4 p-4">
            <input
             type="text"
             className="border border-solid border-black"
             value={searchText}
             onChange={(e)=>{
             setSearchtext(e.target.value);
            }}      
            />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                // Filter the restaurant cards and update the UI
                // searchText

                // console.log(searchText)


                const filteredRestaurants= restaurantList.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())

            )
            console.log(filteredRestaurants)
             setFilteredRestaurants(filteredRestaurants);
             }}>Search</button> 
            </div>
        
        
        
        <div className="w-32 h-9 bg-slate-500 rounded-lg  m-4 mt-12 text-center" 
        onClick={() =>{ 
            const filterlist=restaurantList.filter((rest)=> rest.info.avgRating >4)
            setlistofRestaurant(filterlist)}}
            >
            best Restaurant
            </div>
            </div>

        <div className="flex flex-wrap m-5">
        {restaurantList.map((restaurant) =>
         ( <Link key={restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}
          >

        {restaurant.info.promoted ? <RestaurantCardPromoted  resData={restaurant} /> :<RestaurentCard resData={restaurant} /> }
         
       
          </Link>
          )
        )}
        
        </div>    
      </div>
          
        
</div>
    )
}


export default Body;