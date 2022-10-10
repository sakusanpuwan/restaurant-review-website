import Restaurant from "./Restaurant"

const RestaurantList = ({restaurants, reviews}) => {

    const restaurantComponents = restaurants.map(restaurant => <Restaurant restaurant={restaurant} />);

    return (
        <>
        <h2>Restaurant List:</h2>
        <div id="restaurant-list">
            {restaurantComponents}
        </div>
        </>
    )

}

export default RestaurantList;