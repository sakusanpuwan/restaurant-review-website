import { useState } from "react";

const ReviewForm = ({restaurant,onSubmit}) => {

    const [newReview, setNewReview] = useState (
        {
            date: "",
            rating: "",
            pricing: "",
            diets: 0,
            accessibility: "" 
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
            diets: 0,
            accessibility: ""
        })};
    

    return(
        <div id="review-form">
            <h3>Submit a Review</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dateOfVisit">Date of Visit:</label>
                <input
                    id="date"
                    name="date" 
                    type="date" 
                    placeholder="date"
                    onChange={handleChange}
                    value={newReview.dateOfVisit}
                />
                <label htmlFor="rating">Rating:</label>
                <input 
                    id="rating"
                    name="rating"
                    type="text" 
                    placeholder="rating"
                    onChange={handleChange}
                    value={newReview.rating}
                />
                <label htmlFor="pricing">Pricing:</label>
                <input 
                    id="pricing"
                    name="pricing"
                    type="text" 
                    placeholder="pricing"
                    onChange={handleChange}
                    value={newReview.pricing}
                />

                <p>Pricing</p>
                <div>
                    <input type="radio" id="£" name="pricing" value="£"/>
                    <label for="£">£</label>
                </div>
                <div>
                    <input type="radio" id="££" name="pricing" value="££"/>
                    <label for="£">££</label>
                </div>
                <div>
                    <input type="radio" id="£££" name="pricing" value="£££"/>
                    <label for="£">£££</label>
                </div>
                <div>
                    <input type="radio" id="££££" name="pricing" value="££££"/>
                    <label for="£">££££</label>
                </div>
                <div>
                    <input type="radio" id="£££££" name="pricing" value="£££££"/>
                    <label for="£">£££££</label>
                </div>

                <label htmlFor="diets">Diets:</label>
                <input 
                    id="diets"
                    name="diets"
                    type="text" 
                    placeholder="diets"
                    onChange={handleChange}
                    value={newReview.diet}
                />
                <label htmlFor="accessibility">Accessibility:</label>
                <input 
                    id="accessibility"
                    name="accessibility"
                    type="text" 
                    placeholder="accessibility"
                    onChange={handleChange}
                    value={newReview.accessibility}
                />
            
                <label htmlFor="diets">Available Dietary Restrictions</label> 
                <div>
                    <input id="dairy_free" type="checkbox" name="diet[]" value="dairy_free"/>
                    <label for="dairy_free">Dairy Free</label>
                </div>
                <div>
                    <input id="nut_free" type="checkbox" name="diet[]" value="nut_free"/>
                    <label for="nut_free">Nut Free</label>
                </div>
                <div>
                    <input id="fish_free" type="checkbox" name="diet[]" value="fish_free"/>
                    <label for="fish_free">Fish Free</label>
                </div>
                <div>
                    <input id="gluten_free" type="checkbox" name="diet[]" value="gluten_free"/>
                    <label for="gluten_free">Gluten Free</label>
                </div>
                <div>
                    <input id="halal" type="checkbox" name="diet[]" value="halal"/>
                    <label for="halal">Halal</label>
                </div>
                <div>
                    <input id="vegetarian" type="checkbox" name="diet[]" value="vegetarian"/>
                    <label for="vegetarian">Vegetarian</label>
                </div>
                <div>
                    <input id="vegan" type="checkbox" name="diet[]" value="vegan"/>
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