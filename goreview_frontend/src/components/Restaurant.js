import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Restaurant = ({restaurant,reviews}) => {

    const route = `/${restaurant.id}`
    const [rating, setRating] = useState("");


    const fetchRatingData = async () => {
        const response = await fetch(`http://localhost:8080/restaurants/rating/${restaurant.id}`)
        const ratingData = await response.json();
        if (parseInt(ratingData) > 0) {
            setRating(ratingData);
        } else {
            setRating("-");
        }
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