import { useState } from "react";

const ReviewForm = ({restaurant,onSubmit}) => {

    const [newReview, setNewReview] = useState (
        {
            date: "",
            rating: "",
            pricing: "",
            diet: [],
            accessibility: [] 
        }
    );

    const handleChange = (event) =>{
        const propertyName = event.target.name;
        const updatedNewReview = {...newReview};
        updatedNewReview[propertyName] = event.target.value;
        setNewReview(updatedNewReview);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(newReview);
        setNewReview({
            date: "",
            rating: "",
            pricing: "",
            diet: [],
            accessibility: []
        })};
    

    return(
        <div>
            <h3>Submit a Review</h3>
            <form onSubmit={handleSubmit} id="review-form">
                <label htmlFor="dateOfVisit">Date of Visit:</label>
                <input
                    id="date"
                    name="date" 
                    type="date" 
                    placeholder="date"
                    onChange={handleChange}
                    value={newReview.dateOfVisit}
                />
                
                <label for="pricing">Pricing</label>
                    <select name="pricing" id="pricing" onChange={handleChange} value={newReview.pricing}>
                        <option value="£">£</option>
                        <option value="££">££</option>
                        <option value="£££">£££</option>
                        <option value="££££">££££</option>
                        <option value="£££££">£££££</option>
                    </select>

                    <label for="rating">Rating</label>
                    <select name="rating" id="rating" onChange={handleChange} value={newReview.rating}>
                        <option value="EXCELLENT">Excellent</option>
                        <option value="GOOD">Good</option>
                        <option value="AVERAGE">Average</option>
                        <option value="NOT_SATISFIED">Not Satisfied</option>
                        <option value="COMPLETELY_DISSATISFIED">Completely Dissatisfied</option>
                    </select>

                <label htmlFor="accessibility">Accessibility</label> 
                <div>
                    <input id="dog_friendly" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="dog_friendly">Dog Friendly</label>
                </div>
                <div>
                    <input id="child_friendly" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="child_friendly">Child Friendly</label>
                </div>
                <div>
                    <input id="accessible_menu" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="accessible_menu">Accessible Menu</label>
                </div>
                <div>
                    <input id="wheelchair_access" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="wheelchair_access">Wheelchair Access</label>
                </div>
                <div>
                    <input id="accessible_parking" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="accessible_parking">Accessible Parking</label>
                </div>
                <div>
                    <input id="accessible_bathrooms" type="checkbox" name="accessibility" onChange={handleChange} value={newReview.accessibility}/>
                    <label for="accessible_bathrooms">Accessible Bathrooms</label>
                </div>
            
                <label htmlFor="diet">Available Dietary Restrictions:</label> 
                <div>
                    <input id="dairy_free" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="dairy_free">Dairy Free</label>
                </div>
                <div>
                    <input id="nut_free" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="nut_free">Nut Free</label>
                </div>
                <div>
                    <input id="fish_free" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="fish_free">Fish Free</label>
                </div>
                <div>
                    <input id="gluten_free" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="gluten_free">Gluten Free</label>
                </div>
                <div>
                    <input id="halal" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="halal">Halal</label>
                </div>
                <div>
                    <input id="vegetarian" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="vegetarian">Vegetarian</label>
                </div>
                <div>
                    <input id="vegan" type="checkbox" name="diet" onChange={handleChange} value={newReview.diet}/>
                    <label for="vegan">Vegan</label>
                </div>

                <label htmlFor="optionalMessage">Write your review</label>
                <input type="text" id="message" name="message" required minLength={15} maxLength={200} size={50}/>
                
                <input type="submit" name="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;