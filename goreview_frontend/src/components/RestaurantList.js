import Restaurant from "./Restaurant"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const RestaurantList = ({restaurants, reviews}) => {

    const restaurantComponents = restaurants.map(restaurant => <Restaurant restaurant={restaurant} reviews = {reviews} />);

    return (
        <div id="container">
        <h2>Restaurant List:</h2>

        <Link to={`/`}><button>ALL</button></Link>
        <Link to={`/italian`}><button>ITALIAN</button></Link>
        <Link to={`/american`}><button>AMERICAN</button></Link>
        <Link to={`/japanese`}><button>JAPANESE</button></Link>
        <Link to={`/spanish`}><button>SPANISH</button></Link>

        <div id="restaurant-list">
            {restaurantComponents}
        </div>
        </div>
    )

}

export default RestaurantList;