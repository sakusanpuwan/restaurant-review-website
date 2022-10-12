const Review = ({review}) => {

    return (
        <div id="review">
            <h4>{review.user.fullName} - {review.dateOfVisit}</h4>
            <p>Rating: {review.rating}</p>
            <p>Pricing: {review.pricing}</p>
            <p>Diets: {review.diet}</p>
            <p>Accessibility: {review.accessibility}</p>
            <p>Review: {review.optionalMessage}</p>
        </div>
    )
}

export default Review;