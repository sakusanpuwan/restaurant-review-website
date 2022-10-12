import { useState } from "react";

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
        postReview(newReview)
    };

    return(
        <div>
            <h2 id="review-form-heading">Submit a Review:</h2>
            <form onSubmit={handleSubmit} id="review-form">
                
                <label htmlFor="dateOfVisit"><strong>Date of Visit:</strong></label>
                <input
                    id="dateOfVisit"
                    name="dateOfVisit" 
                    type="date" 
                    placeholder="Date Of Visit"

                    onChange={handleChange}
                    value={newReview.dateOfVisit}
                />
                
                <label htmlFor="pricing"><strong>Pricing:</strong></label>
                    <select name="pricing" id="pricing" onChange={handleChange} value={newReview.pricing}>
                        <option value="£">£</option>
                        <option value="££">££</option>
                        <option value="£££">£££</option>
                        <option value="££££">££££</option>
                        <option value="£££££">£££££</option>
                    </select>

                    <label htmlFor="rating"><strong>Rating:</strong></label>
                    <select name="rating" id="rating" onChange={handleChange} value={newReview.rating}>
                        <option value="EXCELLENT">Excellent</option>
                        <option value="GOOD">Good</option>
                        <option value="AVERAGE">Average</option>
                        <option value="NOT_SATISFIED">Not Satisfied</option>
                        <option value="COMPLETELY_DISSATISFIED">Completely Dissatisfied</option>
                    </select>

                <div className="box">
                    <label htmlFor="accessibilities"><strong>Accessibility:</strong></label>
                    <div> 
                        <input id="DOG_FRIENDLY" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="DOG_FRIENDLY">Dog Friendly</label>
                    </div>
                    
                    <div>
                        <input id="CHILD_FRIENDLY" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="CHILD_FRIENDLY">Child Friendly</label>
                    </div>
                
                    <div>
                        <input id="ACCESSIBLE_MENU" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="ACCESSIBLE_MENU">Accessible Menu</label>
                    </div>
                    
                    <div>
                        <input id="WHEELCHAIR_ACCESS" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="WHEELCHAIR_ACCESS">Wheelchair Access</label>
                    </div>
                    
                    <div>
                        <input id="ACCESSIBLE_PARKING" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="ACCESSIBLE_PARKING">Accessible Parking</label>
                    </div>
                    
                    <div>
                        <input id="ACCESSIBLE_BATHROOMS" type="checkbox" name="accessibilities" onChange={handleBoxChange} value={newReview.accessibilities}/>
                        <label htmlFor="ACCESSIBLE_BATHROOMS">Accessible Bathrooms</label>
                    </div>
                </div>

                <div>
                    <label htmlFor="diet"><strong>Available Dietary Restrictions:</strong></label>
                    <div> 
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
                </div>

                <label htmlFor="optionalMessage"><strong>Write your review:</strong></label>
                <input type="text" id="optionalMessage" name="optionalMessage" onChange={handleChange} value={newReview.optionalMessage} required minLength={1} maxLength={200} size={50}/>
                
                <input id="form-submit-btn" type="submit" name="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;