import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant}) => {

    const route = `/${restaurant.name}`

    return (
        <>
        <div id="restaurant-card">
            <h2>{restaurant.name}</h2>
            <img></img>
                <p>Location: {restaurant.location}</p>
                <p>Cuisine: {restaurant.cuisine}</p>
            <BrowserRouter>
            <button><Link to={route}>Read more</Link></button>
            <Routes>
                <Route path={route} element={<RestaurantReviewPage restaurant={restaurant}/>}/>
            </Routes>
            </BrowserRouter>

        </div>
        </>

    )

}

export default Restaurant;