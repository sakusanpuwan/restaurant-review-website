import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Link, Routes, Route, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Restaurant from './components/Restaurant';
import RestaurantList from "./components/RestaurantList";
import RestaurantReviewPage from './components/RestaurantReviewPage';
import Footer from './components/Footer';

// const route = `/${restaurant.id}`


function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);

    const fetchRestaurantData = async () => {
        const response = await fetch('http://localhost:8080/restaurants');
        const restaurantData = await response.json();
        setRestaurants(restaurantData);
       
    }

    const fetchReviewData = async () => {
        const response = await fetch('http://localhost:8080/reviews');
        const reviewData = await response.json();
        setReviews(reviewData);
    }



    const submitNewReview = (newReview) => {
        fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(fetchRestaurantData);
    }

    const deleteReview = (id) => {
        fetch(`http://localhost:8080/reviews/${id}`, {
            method: "DELETE"
        })
            .then(fetchRestaurantData);
    }

    useEffect(() => {
        fetchRestaurantData();
        fetchReviewData();
    },[])


    const italianRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "ITALIAN"));
    const americanRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "AMERICAN"));
    const japaneseRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "JAPANESE"));
    const spanishRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "SPANISH"));
  

  
  return (
    <div className="App">

      
        
        <BrowserRouter>
          <Navigation />
          
          <Routes>
            <Route path={"/"} element={<RestaurantList restaurants={restaurants} reviews={reviews}  />} />
            <Route path={'/italian'} element={<RestaurantList restaurants={italianRestaurants} reviews={reviews}  />} />
            <Route path={'/american'} element={<RestaurantList restaurants={americanRestaurants} reviews={reviews}  />} />
            <Route path={'/japanese'} element={<RestaurantList restaurants={japaneseRestaurants} reviews={reviews}  />} />
            <Route path={'/spanish'} element={<RestaurantList restaurants={spanishRestaurants} reviews={reviews}  />} />
          
            {restaurants.map(restaurant => {
              return <Route path={`/${restaurant.id}`} element={<RestaurantReviewPage restaurant={restaurant} reviews = {reviews}/>}/>
            })}

          </Routes>

          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;
