import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"
import { useEffect, useState } from "react";

const RestaurantReviewPage = ({postReview,restaurant,reviews}) => {

    
    // const filteredReviews = reviews.filter(review => review.restaurant.name === restaurant.name)
    
    return (
        <div id="review-page">
            <h2>{restaurant.name}</h2>
<<<<<<< HEAD
            <ReviewList restaurant={restaurant} reviews={filteredReviews}/>
            <ReviewForm 
            restaurant={restaurant}
            postReview={postReview}/>
=======
            <ReviewList 
                restaurant={restaurant} 
                reviews={reviews.filter(review => review.restaurant.name === restaurant.name)}/>
            <ReviewForm 
                restaurant={restaurant}
                postReview={postReview}/>

>>>>>>> kf
        </div>
    )
}

export default RestaurantReviewPage;