import Restaurant from "./Restaurant"

const RestaurantList = ({restaurants, reviews}) => {

    const restaurantComponents = restaurants.map(restaurant => <Restaurant restaurant={restaurant} reviews = {reviews} />);

    return (
        <div id="container">
        <h2>Restaurant List:</h2>
        <div id="restaurant-list">
            {restaurantComponents}
        </div>
        </div>
    )

}

export default RestaurantList;