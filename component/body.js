import RestaurentCard from "./reastaurant";
import {resList} from "../utills/mock data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utills/useOnlinestatus";


const Body = () =>{

    const [restaurantList,setlistofRestaurant]= useState ([]);
    const [searchText,setSearchtext]= useState ("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);

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
        console.log(error);
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

        
    
    //     // optional chain

    // // setlistofRestauant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // // setlistofRestauant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         
    //   };

    

    return restaurantList===0 ?(<Shimmer/>): 

  (
        <div className="body">
        <div className="filter-flex">

        <div className="Search">
            <input
             type="text"
             className="border border-solid border-black"
             value={searchText}
             onChange={(e)=>{
             setSearchtext(e.target.value);
            }}      
            />
            <button className="btn" onClick={()=>{
                // Filter the restaurant cards and update the UI
                // searchText

                console.log(searchText)


                const filteredRestaurants= restaurantList.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
             setFilteredRestaurants(filteredRestaurants);
             }}>Search</button> 
            </div>
        
        
        
        <div className="bst-restaurant" 
        onClick={() =>{ 
            const filterlist=restaurantList.filter((rest)=> rest.info.avgRating >4)
            setlistofRestaurant(filterlist)}}
            >
            best Restaurant
            </div>
        <div className="res-container">
        {restaurantList.map((restaurant) =>
         ( <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurentCard 
          
           resData={restaurant} /></Link>)
        )}</div>
            
        </div>
          
        
</div>
    )
}


export default Body;