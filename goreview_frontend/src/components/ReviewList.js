import Review from "./Review";

const ReviewList = ({reviews}) => {
    const reviewComponents = reviews.map(review =>{
        return <Review key={review.id} review={review}/>
    })

    return (
        <>
            <h3>Reviews</h3>
            <hr />
            {reviewComponents}
        </>
    )
}

export default ReviewList;