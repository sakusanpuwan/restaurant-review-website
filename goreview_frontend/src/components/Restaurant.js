import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant,reviews}) => {

    const route = `/${restaurant.id}`


    return (
        <>
        <Link to={route}> 
            <div className="restaurant-card">
                <img src={restaurant.imgURL}></img>
                <h2>{restaurant.name}</h2>

                <p>Location: {restaurant.location}</p>
                <p>Cuisine: {restaurant.cuisine}</p>
            </div>
        </Link>
        </>

    )

}

export default Restaurant;