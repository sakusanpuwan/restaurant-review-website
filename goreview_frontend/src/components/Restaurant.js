import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import RestaurantReviewPage from "./RestaurantReviewPage";


const Restaurant = ({restaurant,reviews}) => {

    const route = `/${restaurant.id}`

    return (
        <>
        <Link to={route}> 
            <div className="restaurant-card">
                <h2>{restaurant.name}</h2>
                <img src={restaurant.imgURL}></img>

    return (
        <>
            <h2>{restaurant.name}</h2>
            <img></img>
            <ul>
                <li>Location: {restaurant.location}</li>
                <li>Cuisine: {restaurant.cuisine}</li>
            </ul>
            
            <BrowserRouter>
            <Link to={route}> <button>Read more</button></Link>
            <Routes>
                <Route path={route} element={<RestaurantReviewPage restaurant={restaurant}/>}/>
            </Routes>
          </BrowserRouter>
        </>

    )

}

export default Restaurant;