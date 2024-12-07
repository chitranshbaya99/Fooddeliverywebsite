import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{


     useEffect(()=> {
        fetchData();
    }, []);
    

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
    
            console.log(json); 
    
            
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants) {
                setlistOfRestaurants(restaurants);
                console.log(restaurants);
                setfilteredData(restaurants);
            } else {
                console.warn("Restaurant data not found in the response.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const[filteredData, setfilteredData] = useState([]);
    

    
     return listOfRestaurants.length === 0 ? <Shimmer /> : (
        
      <div>
        <div className='filter flex'>
            <div className="search m-4 p-4 flex items-center">
                <input type="text" className="border border-solid border-black"  onChange={(e)=> setSearchText(e.target.value)}></input>
                <button className="px-5 py-3 w-[90px] flex items-center bg-gray-400 m-4 rounded-lg text-white" onClick={() => { 
    const filteredData = listOfRestaurants.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredData(filteredData);
    
}}>Search</button>             

            </div>
           

<div className="m-4 p-4">
            <button className="px-5 py-3 w-[200px] flex items-center bg-gray-400  text-white m-4 rounded-lg" onClick={()=> {  
                const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
                );
                setfilteredData(filteredList);
                }}>
                Top Rated Restaurants
                </button>
                
                </div>
                </div>
        

        {/* <div className='res-container' > */}
        <div className='flex flex-wrap' >
            
  {filteredData.map((restaurant) => (
    <Link key={restaurant.info.id} to={"/restaurantmenu/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
    
  ))}
</div>

      </div>
    )
  }

  export default Body;
