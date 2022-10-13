import Review from "./Review";

const ReviewList = ({reviews,restaurant}) => {

    const reviewComponents = [];

    reviews.map(review =>{
        reviewComponents.unshift(<Review key={review.id} review={review}/>)
    })

    return (
        <>
            <div id="reviews-container">
                {reviewComponents}
            </div>
        </>
    )
}

export default ReviewList;