import RestaurantReviewPage from "./RestaurantReviewPage";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Restaurant = ({restaurant}) => {

    // const handleClick = () => {
    //     return(
    //         <RestaurantReviewPage restaurant = {restaurant}/>
    //     )
    // }

    const route = `/${restaurant.id}`;

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
            
            {/* <BrowserRouter>
            <button> <Link to={route}>Submit review</Link></button>

            <Routes>
                <Route path={route} element={<RestaurantReviewPage/>}

            </Routes>
            </BrowserRouter> */}

            <BrowserRouter>
            <button/>
            </BrowserRouter>
        </>

    )

}

export default Restaurant;