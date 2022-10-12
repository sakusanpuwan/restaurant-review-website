import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"

const RestaurantReviewPage = ({restaurant,reviews}) => {

    
    const filteredReviews = reviews.filter(review => review.restaurant.name === restaurant.name)
    
    return (
        <div id="review-page">
            <h2>{restaurant.name}</h2>
            <ReviewList restaurant={restaurant} reviews={filteredReviews}/>
            <ReviewForm restaurant={restaurant}/>

        </div>
    )
}

export default RestaurantReviewPage;