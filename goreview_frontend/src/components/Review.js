const Review = ({review}) => {
    return (
        <>
            <h4>{review.date}</h4>
            <p>Rating: {review.rating}</p>
            <p>Pricing: {review.pricing}</p>
            <p>Diets: {review.diets}</p>
            <p>Accessibility: {review.accessibility}</p>
            <hr />
        </>
    )
}

export default Review;