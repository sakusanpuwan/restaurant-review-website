const Review = ({review}) => {

    const diets = review.diet.map(diet => {
        return diet.toLowerCase().replace('_', ' ');
    });

    const accessibilities = review.accessibility.map(accessibility => {
        return accessibility.toLowerCase().replace('_', ' ');
    })

    return (
        <div className="review-card">
            <h4>{review.user.fullName} - {review.dateOfVisit}</h4>
            <p>Rating: {review.rating.toLowerCase()}</p>
            <p>Pricing: {review.pricing}</p>
            <p>Diets: {diets.join(', ')}</p>
            <p>Accessibilities: {accessibilities.join(', ')}</p>
            <p>Review: {review.optionalMessage}</p>
        </div>
    )
}

export default Review;