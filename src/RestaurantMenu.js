// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "./utils/constants";
// import RestaurantCategory from "./RestaurantCategory";

// const RestaurantMenu = () => {

    
//     const {resId} = useParams();
//     console.log(resId);

//     const [resinfo, setResInfo] = useState(null);
//     const [menuinfo, setMenuInfo] = useState(null);
//     const [itemCards, setItemCards] = useState([]); 
    
    
   

//     useEffect(() => {
//         fetchMenu();
//     }, []);

//     const fetchMenu = async () => {
//         try {
//             const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//             const json = await data.json();
//             setResInfo(json.data);
            

//              const dataMenu = await fetch(MENU_API+resId);
            

//             console.log("datamenu",dataMenu);

                
//             const jsonn = await dataMenu.json();
//             setMenuInfo(jsonn);
//             console.log(jsonn);

//             // Extract itemCards and update state
//             const extractedItemCards = jsonn?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
//             setItemCards(extractedItemCards);
            
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }


        
//     };

//     // Extract restaurant information
//     //const { name, avgRating, costForTwo, cuisines } = resinfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info || {};
//     // const { name, avgRating, costForTwo, cuisines } = resinfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]?.info || {};
    
//     const restaurantsInfo = resinfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
// let newname , avgRatingnew, newcuisines, newcostfortwo;
// const restaurantDetails = restaurantsInfo.map(restaurant => {
//     const { name, avgRating, costForTwo, cuisines } = restaurant.info || {};
//     newname = name;
//     avgRatingnew = avgRating;
//     newcostfortwo = costForTwo;
//     newcuisines = cuisines;
//     return { newname, avgRatingnew, newcostfortwo, newcuisines };
// });

// // Now `restaurantDetails` will be an array of objects containing details of all restaurants
// console.log(restaurantDetails);


// const categories = resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//     (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   ) || [];
  
    
        
//     return (
        
//         <div className='text-center'>        
//         <div>
//             {/* <h3>Restaurant Info</h3>
//             <h3>hello{newname}</h3>
//             <p>Cost for Two: {newcostfortwo}</p>
//             <p>Cuisines: {newcuisines?.join(", ")}</p>
//             <p>Average Rating: {avgRatingnew}</p> */}
//             <h3>Menu Items</h3>
//             {itemCards.length > 0 ? (
//                 itemCards.map((item, index) => (
//                     <h4 key={index}>{item.card.info.name} - Rs. {item.card.info.defaultPrice/100 || item.card.info.defaultprice}</h4> // Display each item's name
//                 ))
//             ) : (
//                 <h3>No menu items available.</h3>
//             )}
            
//            {/* accordian builidng */}
//             {categories.map((category)=> {
//                 <RestaurantCategory />
//             })}
//             </div>
//         </div>
//     );
// };

// export default RestaurantMenu;


// ---------------------------------------------------------------*******************--------------------------







// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { MENU_API } from "./utils/constants";

// const RestaurantMenu = () => {
//     const { resId } = useParams();
//     const [restaurantInfo, setRestaurantInfo] = useState(null);
//     const [menuItems, setMenuItems] = useState([]);
//     const [loading, setLoading] = useState(true);




//     useEffect(() => {
//         fetchRestaurantData();
//     }, []);

//     const fetchRestaurantData = async () => {
//         try {
//             // Fetch restaurant info
//             const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//             const data = await res.json();
//             const restaurants = data.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//             // Assuming we're interested in the first restaurant for simplicity
//             const currentRestaurant = restaurants.find(r => r.info.id === resId); // Replace with the actual property to match

//             if (currentRestaurant) {
//                 setRestaurantInfo(currentRestaurant.info);
//                 fetchMenu(currentRestaurant.info.name); // Fetch menu based on restaurant name
//             }
//         } catch (error) {
//             console.error("Error fetching restaurant data:", error);
//         }
//     };

//     const fetchMenu = async (restaurantName) => {
//         try {
//             const menuResponse = await fetch(`${MENU_API}?name=${encodeURIComponent(restaurantName)}`); // Adjust the API call based on how you retrieve menu data
//             const menuData = await menuResponse.json();
//             setMenuItems(menuData.data?.menu || []); // Adjust according to the actual structure
//             setLoading(false);
            
//         } catch (error) {
//             console.error("Error fetching menu data:", error);
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

    

//     return (
//         <div>
//             {/* <h3>Restaurant Info</h3>
//             <h3>{restaurantInfo?.name}</h3>
//             <p>Average Rating: {restaurantInfo?.avgRating}</p>
//             <p>Cost for Two: {restaurantInfo?.costForTwo}</p>
//             <p>Cuisines: {restaurantInfo?.cuisines?.join(", ")}</p> */}

//             <h3>Menu Items</h3>
//             {menuItems.length > 0 ? (
//                 menuItems.map((item, index) => (
//                     <h4 key={index}>{item.name} - Rs. {item.price / 100 || item.defaultPrice}</h4>
//                 ))
//             ) : (
//                 <h3>No menu items available.</h3>
//             )}
//         </div>
//     );
// };

// export default RestaurantMenu;













import React, { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
// import { MENU_API } from '../utils/constants';
import { useParams } from "react-router-dom";
import RestaurantCategory from './RestaurantCategory';
import { MENU_API } from './utils/constants';




const RestaurantMenu = () => {

  
  const [data, setData] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
    
    const response = await fetch(MENU_API + resId);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (data === null) return <Shimmer />;

  const restaurantName = data?.cards?.[2]?.card?.card?.info?.name;
  const restaurantCuisines = data?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage = data?.cards?.[2]?.card?.card?.info?.costForTwoMessage;

  const categories = data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div className='text-center p-6 m-6'>
      <h1 className='text-3xl font-bold flex justify-center'>{restaurantName}</h1>
      <h3 className='flex justify-center font-thin'>
        {restaurantCuisines && restaurantCuisines.join(", ")}
      </h3>
      <h3 className='flex justify-center font-thin'>{costForTwoMessage}</h3>
      
      {/* Categories accordion */}
      {categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems = {index === showIndex ? true : false}
          setShowIndex = {()=> setShowIndex(index)}/>
        ))
      ) : (
        <div>No categories available.</div>
      )}
    </div>
  );
};

export default RestaurantMenu;
