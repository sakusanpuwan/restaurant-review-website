import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Restaurant from './components/Restaurant';
import RestaurantList from "./components/RestaurantList";
import RestaurantReviewPage from './components/RestaurantReviewPage';
import Footer from './components/Footer';
import NewUser from './components/NewUser';
import UserList from './components/UserList';

// const route = `/${restaurant.id}`


function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users,setUsers] = useState([]);

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

    const fetchUserData = async () => {
      const response = await fetch("http://localhost:8080/users")
      const userData = await response.json();
      setUsers(userData);
    }

    const postReview = (newReview) => {

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
        fetchUserData();
    },[])


    const italianRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "ITALIAN"));
    const americanRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "AMERICAN"));
    const japaneseRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "JAPANESE"));
    const spanishRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "SPANISH"));
    const britishRestaurants = restaurants.filter((restaurant => restaurant.cuisine === "BRITISH"));

    const postUser = async(newUser) => {
      await fetch("http://localhost:8080/users",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      })

    }


  

  
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

              return <Route path={`/${restaurant.id}`} element={<RestaurantReviewPage restaurant={restaurant} postReview={postReview} reviews = {reviews}/>}/>
            })}


            <Route path={'/new-user'} element={<NewUser postUser={postUser}/>}/>

            <Route path={'/users'} element={<UserList users={users}/>}/>

          </Routes>

          <Footer/>
        </BrowserRouter>
    </div>
  )
}}

export default App;
