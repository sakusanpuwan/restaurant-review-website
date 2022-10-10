import RestaurantReview from "./RestaurantReview"

const Restaurant = ({restaurant}) => {

    const handleClick = () => {
        return(
            <RestaurantReview restaurant = {restaurant}/>
        )
    }

    return (
        <>
            <h2>{restaurant.name}</h2>
            <img></img>
            <ul>
                <li>Location: {restaurant.location}</li>
                <li>Cuisine: {restaurant.cuisine}</li>
                <li>Accessiblity: {restaurant.accessibility}</li>
                <li>Rating: {restaurant.rating}</li>
            </ul>
            <button onClick={handleClick}></button>
        
        </>

    )

}

export default Restaurant;