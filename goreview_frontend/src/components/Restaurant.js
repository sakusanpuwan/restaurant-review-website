import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";
import { useEffect, useState } from "react";


const Restaurant = ({restaurant,reviews}) => {

    const route = `/${restaurant.id}`
    const [rating, setRating] = useState(0);


    const fetchRatingData = async () => {
        const response = await fetch(`http://localhost:8080/restaurants/rating/${restaurant.id}`)
        const ratingData = await response.json();
        setRating(ratingData);
    }

    useEffect(() => {
        fetchRatingData();
    },[])

    return (
        <>
        <Link to={route}> 
            <div className="restaurant-card">
                <img src={restaurant.imgURL}></img>
                <h2>{restaurant.name}</h2>

                <p>Location: {restaurant.location}</p>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Rating: {rating}</p>
            </div>
        </Link>
        </>

    )

}

export default Restaurant;