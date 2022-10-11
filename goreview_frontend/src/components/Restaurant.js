import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant,reviews}) => {

    const route = `/${restaurant.id}`


    return (
        <>
        <Link to={route}> 
            <div className="restaurant-card">
                <h2>{restaurant.name}</h2>
                <img src={restaurant.imgURL}></img>

                    <p>Location: {restaurant.location}</p>
                    <p>Cuisine: {restaurant.cuisine}</p>

                <button>Read more</button>

            </div>
        </Link>
        </>

    )

}

export default Restaurant;