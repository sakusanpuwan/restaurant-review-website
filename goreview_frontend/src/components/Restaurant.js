import RestaurantReview from "./RestaurantReview"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant}) => {

    // const handleClick = () => {
    //     return(
    //         <RestaurantReview restaurant = {restaurant}/>
    //     )
    // }

    const route = restaurant.id;

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
            <BrowserRouter>
            <button><Link to={route}>Read more</Link></button>
            <Routes>
                <Route path={route} element={<RestaurantReviewPage restaurant={restaurant}/>}/>
            </Routes>
            </BrowserRouter>

        
        </>

    )

}

export default Restaurant;