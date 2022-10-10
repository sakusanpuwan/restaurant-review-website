import { useEffect, useState } from "react";

const RestaurantContainer = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [reviews, setRevies] = useState([]);

    const fetchRestaurantData = async () => {
        const response = await fetch('http://localhost:8080/restaurants');
        const restaurantData = await response.json();
        setRestaurants(restaurantData);
    }

    const fetchReviewData = async () => {
        const response = await fetch('http://localhost:8080/reviews');
        const reviewData = await response.json();
        setReviews(reviewData);
    }

    const submitNewReview = (newReview) => {
        fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(fetchRestaurantData);
    }

    const deleteReview = (id) => {
        fetch(`http://localhost:8080/reviews/${id}`, {
            method: "DELETE"
        })
            .then(fetchRestaurantData);
    }

    useEffect(fetchRestaurantData, []);
    useEffect(fetchReviewData, []);

    return (
        <>
            <RestaurantList restaurants={restaurants} reviews={reviews} />
        </>
    )

}

export default RestaurantContainer;