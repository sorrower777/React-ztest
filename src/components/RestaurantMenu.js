// import React from "react";
// import { useParams } from "react-router";
const RestaurantMenu = () =>{
    // const {resId} = useParams();
    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );

};
// console.log(RestaurantMenu);
export default RestaurantMenu;