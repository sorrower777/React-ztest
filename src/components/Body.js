import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
        const [listOfRestaurants,setListOfRestaurants] = useState([]);
        // const arr = useState([]);
        // const [listOfRestaurants, setListOfRestaurants] = arr;
        // const listOfRestaurants = arr[0];
        // const setListOfRestaurants = arr[1];
        const [searchText, setSearchText] = useState("");

        const [filteredRestaurant , setFilteredRestaurant] = useState([]);

        // Whenever state variables update, react triggers a reconcilation cycle(re-renders the component) 
        console.log("Body rendered"); 

        useEffect(() =>{
            fetchData();
        }, []);

        const fetchData = async () =>{
            const data  = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

            const json = await data.json(); 
            console.log("Data fetched");
            
            // Optional Chaining
            setListOfRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
            setFilteredRestaurant(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
        };


    return listOfRestaurants.length === 0 ? <Shimmer/>:(
        <div className="body">
           <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) =>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    // Filter the restaurant cards and update the UI
                    // searchText
                    // console.log(searchText); 

                   const filteredRestaurant = listOfRestaurants.filter((restaurant) => restaurant.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                     
                   setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div> 
                <button className="filter-btn" 
                onClick={()=>{ const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.card.card.info.avgRating > 4.5
                    );
                    setFilteredRestaurant(filteredList);
                    console.log(filteredRestaurant);
                }}
                    >Top Rated Restaurants</button>
           </div>
            <div className="res-container">
                {/* not using keys (not acceptable) <<<< index as key <<<<<<<<<<<<<< unique id (best practice) */}
                {filteredRestaurant.map((restaurant) =>(
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};

export default Body;
