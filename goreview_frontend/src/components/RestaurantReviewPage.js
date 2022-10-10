import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList"

const RestaurantReviewPage = ({restaurant}) => {

    // add filter here then pass relevant list of reviews to ReviewList
    
    return (
        <>
            <h3>Hey from RestaurantReviewPage</h3>
            <ReviewList restaurant={restaurant}/>
            <ReviewForm restaurant={restaurant}/>

        </>
    )
}

export default RestaurantReviewPage;