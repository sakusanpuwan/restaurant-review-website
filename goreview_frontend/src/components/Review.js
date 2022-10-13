import ReviewList from "./ReviewList";

const Review = ({review}) => {


    return (
        <div className="review-card">
            <h4>{review.user.fullName} - {review.dateOfVisit}</h4>
            <p>Rating: {review.rating}</p>
            <p>Pricing: {review.pricing}</p>
            <p>Diets: {review.diet}</p>
            <p>Accessibilities: {review.accessibility}</p>
            <p>Review: {review.optionalMessage}</p>
        </div>
    )
}

export default Review;