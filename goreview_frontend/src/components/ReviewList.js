import Review from "./Review";

const ReviewList = ({reviews,restaurant}) => {
    const reviewComponents = reviews.map(review =>{
        return <Review key={review.id} review={review}/>
    })

    return (
        <>
            <h3>Reviews for: {restaurant.name} {restaurant.location}</h3>
            <hr />
            {reviewComponents}
        </>
    )
}

export default ReviewList;