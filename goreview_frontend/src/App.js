import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
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



    const postReview = (newReview) => {
        fetch(`http://localhost:8080/reviews?username=${newReview.username}&restaurantId=${newReview.restaurantId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        })
          .then(response => response.json())
          // .then(savedReview => setReviews([...reviews, savedReview])) // "review with id 13 created by alice1"
          .then(fetchReviewData())
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
  
  return (
    <div className="App">
        
        <BrowserRouter>
          <Navigation />
          
          <Routes>
            <Route path={"/"} element={<RestaurantList restaurants={restaurants} reviews={reviews}  />} />
          
            {restaurants.map(restaurant => {
              return <Route path={`/${restaurant.id}`} element={<RestaurantReviewPage restaurant={restaurant} postReview={postReview} reviews = {reviews}/>}/>
            })}
              
          </Routes>

          <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;
