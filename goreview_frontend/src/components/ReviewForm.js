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

    const handleBoxChange = (e) => {
        const itemArray = newReview[e.target.name];
        const reviewCopy = {...newReview};
        if (e.target.checked){
            const updatedArray = [...itemArray, e.target.id];
            reviewCopy[e.target.name]=updatedArray;
            setNewReview(reviewCopy);
        }
        else {
            const startIndex = itemArray.indexOf(e.target.id)
            const updatedArray = [...itemArray]
            updatedArray.splice(startIndex, 1)
            reviewCopy[e.target.name]=updatedArray;
            setNewReview(reviewCopy);
        }
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



                <label htmlFor="accessibility">Accessibility</label> 

                {/* <label htmlFor="dog_friendly">
                    <input type = "checkbox" checked={checked} onChange={handleBoxChange} name="accessibility" value="dog_friendly" id="dog_friendly"/>
                    Dog Friendly
                </label> */}
                {/* <p> Is "it" checked? {checked.toString()</p> */}
                <div className="box">
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
                </div>

                <label htmlFor="diet">Available Dietary Restrictions:</label> 
                <div>
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
                <input type="text" id="message" name="message" required minLength={15} maxLength={200} size={50}/>
                
                <input type="submit" name="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;