import { useState } from "react";

<<<<<<< HEAD
const ReviewForm = ({restaurants, reviews, postReview}) => {

    const [newReview, setNewReview] = useState (
        {
            accessibility: [],
            dateOfVisit: "",
            diet: [],
            optionalMessage: "",
            pricing: null,
            rating: null,
=======
const ReviewForm = ({restaurant, postReview}) => {

    const [newReview, setNewReview] = useState (
        {
            username: "alice1",
            restaurantId: restaurant.id,
            dateOfVisit: "",
            rating: "",
            optionalMessage: "",
            accessibilities: [],
            diets: [],
            pricing: "",
>>>>>>> kf
        }
    );


    const handleChange = (e) =>{
        const propertyName = e.target.name;
        const updatedNewReview = {...newReview};
        updatedNewReview[propertyName] = e.target.value;
        setNewReview(updatedNewReview);
    }

    const handleBoxChange = (e) => {
        const itemArray = newReview[e.target.name];
        const updatedNewReview = {...newReview};
        if (e.target.checked){
            const updatedArray = [...itemArray, e.target.id];
            updatedNewReview[e.target.name]=updatedArray;
            setNewReview(updatedNewReview);
        }
        else {
            const startIndex = itemArray.indexOf(e.target.id)
            const updatedArray = [...itemArray]
            updatedArray.splice(startIndex, 1)
            updatedNewReview[e.target.name]=updatedArray;
            setNewReview(updatedNewReview);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        postReview(newReview)
    };
=======
        postReview(newReview);
        console.log("hello from form");
    }
>>>>>>> kf

    return(
        <div>
            <h3>Submit a Review</h3>
            <form onSubmit={handleSubmit} id="review-form">

                <label htmlFor="username">User</label>
                <label htmlFor="restaurant">Restaurant</label>
                
                <label htmlFor="dateOfVisit">Date of Visit:</label>
                <input
                    id="dateOfVisit"
                    name="dateOfVisit" 
<<<<<<< HEAD
                    type="dateOfVisit" 
                    placeholder="Date Of Visit"
=======
                    type="date" 
                    placeholder="Date of visit"
>>>>>>> kf
                    onChange={handleChange}
                    value={newReview.dateOfVisit}
                />
                
                <label htmlFor="pricing">Pricing</label>
                    <select name="pricing" id="pricing" onChange={handleChange} value={newReview.pricing}>
                        <option value="£">£</option>
                        <option value="££">££</option>
                        <option value="£££">£££</option>
                        <option value="££££">££££</option>
                        <option value="£££££">£££££</option>
                    </select>

                    <label htmlFor="rating">Rating</label>
                    <select name="rating" id="rating" onChange={handleChange} value={newReview.rating}>
                        <option value="EXCELLENT">Excellent</option>
                        <option value="GOOD">Good</option>
                        <option value="AVERAGE">Average</option>
                        <option value="NOT_SATISFIED">Not Satisfied</option>
                        <option value="COMPLETELY_DISSATISFIED">Completely Dissatisfied</option>
                    </select>



<<<<<<< HEAD
                <label htmlFor="accessibility">Accessibility</label> 
=======
                <label htmlFor="accessibilities">Accessibility</label> 
>>>>>>> kf

                {/* <label htmlFor="dog_friendly">
                    <input type = "checkbox" checked={checked} onChange={handleBoxChange} name="accessibility" value="dog_friendly" id="dog_friendly"/>
                    Dog Friendly
                </label> */}
                {/* <p> Is "it" checked? {checked.toString()</p> */}
                <div className="box">
<<<<<<< HEAD
                    <input id="dog_friendly" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="dog_friendly">Dog Friendly</label>
                </div>
                <div className="box">
                    <input id="child_friendly" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="child_friendly">Child Friendly</label>
                </div>
                <div className="box">
                    <input id="accessible_menu" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="accessible_menu">Accessible Menu</label>
                </div>
                <div className="box">
                    <input id="wheelchair_access" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="wheelchair_access">Wheelchair Access</label>
                </div>
                <div className="box">
                    <input id="accessible_parking" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="accessible_parking">Accessible Parking</label>
                </div>
                <div className="box">
                    <input id="accessible_bathrooms" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                    <label htmlFor="accessible_bathrooms">Accessible Bathrooms</label>
=======
                    <input id="DOG_FRIENDLY" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="DOG_FRIENDLY">Dog Friendly</label>
                </div>
                <div className="box">
                    <input id="CHILD_FRIENDLY" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="CHILD_FRIENDLY">Child Friendly</label>
                </div>
                <div className="box">
                    <input id="ACCESSIBLE_MENU" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="ACCESSIBLE_MENU">Accessible Menu</label>
                </div>
                <div className="box">
                    <input id="WHEELCHAIR_ACCESS" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="WHEELCHAIR_ACCESS">Wheelchair Access</label>
                </div>
                <div className="box">
                    <input id="ACCESSIBLE_PARKING" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="ACCESSIBLE_PARKING">Accessible Parking</label>
                </div>
                <div className="box">
                    <input id="ACCESSIBLE_BATHROOMS" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                    <label htmlFor="ACCESSIBLE_BATHROOMS">Accessible Bathrooms</label>
>>>>>>> kf
                </div>

                <label htmlFor="diet">Available Dietary Restrictions:</label> 
                <div>
<<<<<<< HEAD
                    <input id="dairy_free" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="dairy_free">Dairy Free</label>
                </div>
                <div>
                    <input id="nut_free" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="nut_free">Nut Free</label>
                </div>
                <div>
                    <input id="fish_free" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="fish_free">Fish Free</label>
                </div>
                <div>
                    <input id="gluten_free" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="gluten_free">Gluten Free</label>
                </div>
                <div>
                    <input id="halal" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="halal">Halal</label>
                </div>
                <div>
                    <input id="vegetarian" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="vegetarian">Vegetarian</label>
                </div>
                <div>
                    <input id="vegan" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                    <label htmlFor="vegan">Vegan</label>
                </div>

                <label htmlFor="optionalMessage">Write your review</label>
                <input type="text" id="optionalMessage" name="optionalMessage" onChange={handleChange} value={newReview.optionalMessage}required minLength={1} maxLength={200} size={50}/>
=======
                    <input id="DAIRY_FREE" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="DAIRY_FREE">Dairy Free</label>
                </div>
                <div>
                    <input id="NUT_FREE" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="NUT_FREE">Nut Free</label>
                </div>
                <div>
                    <input id="FISH_FREE" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="FISH_FREE">Fish Free</label>
                </div>
                <div>
                    <input id="GLUTEN_FREE" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="GLUTEN_FREE">Gluten Free</label>
                </div>
                <div>
                    <input id="HALAL" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="HALAL">Halal</label>
                </div>
                <div>
                    <input id="VEGETARIAN" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="VEGETARIAN">Vegetarian</label>
                </div>
                <div>
                    <input id="VEGAN" type="checkbox" name="diets" onChange={handleBoxChange} value={newReview.diets}/>
                    <label htmlFor="VEGAN">Vegan</label>
                </div>

                <label htmlFor="optionalMessage">Write your review</label>
                <input type="text" id="optionalMessage" name="optionalMessage" onChange={handleChange} value={newReview.optionalMessage} required minLength={1} maxLength={200} size={50}/>
>>>>>>> kf
                
                <input type="submit" name="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;