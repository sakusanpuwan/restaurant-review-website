import Restaurant from "./Restaurant"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const RestaurantList = ({restaurants, reviews}) => {

    const restaurantComponents = restaurants.map(restaurant => <Restaurant restaurant={restaurant} reviews = {reviews} />);

    return (
        <div id="container">
            <h2>Restaurant List:</h2>

            <div id="filters-container">
                <span>Filter by cuisine: </span>
                <Link to={`/`}><button className="filter-btn">ALL</button></Link>
                <Link to={`/italian`}><button className="filter-btn">ITALIAN</button></Link>
                <Link to={`/american`}><button className="filter-btn">AMERICAN</button></Link>
                <Link to={`/japanese`}><button className="filter-btn">JAPANESE</button></Link>
                <Link to={`/spanish`}><button className="filter-btn">SPANISH</button></Link>
            </div>

            <div id="restaurant-list">
                {restaurantComponents}
            </div>
        </div>
    )

}

export default RestaurantList;