import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"

const RestaurantReviewPage = ({restaurant,reviews}) => {

    
    const filteredReviews = reviews.filter(review => review.restaurant.name === restaurant.name)
    
    return (
        <>
            <ReviewList restaurant={restaurant} reviews={filteredReviews}/>
            <ReviewForm restaurant={restaurant}/>

        </>
    )
}

export default RestaurantReviewPage;