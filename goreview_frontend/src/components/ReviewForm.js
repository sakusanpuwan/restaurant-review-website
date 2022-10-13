import { useState } from "react";

const ReviewForm = ({restaurant, postReview}) => {

    const [newReview, setNewReview] = useState (
        {
            username: "alice1",
            restaurantId: restaurant.id,
            dateOfVisit: "",
            rating: "",
            optionalMessage: "",
            accessibility: [],
            diet: [],
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
            <p id="required-fields">
                Required fields are followed by
                <strong><span aria-label="required"> *</span></strong>.
            </p>
            <form onSubmit={handleSubmit} id="review-form">
                
                <label htmlFor="dateOfVisit">
                    <span><strong>Date of visit: </strong></span>
                    <span aria-label="required">*</span></label>
                <input 
                    id="dateOfVisit" 
                    name="dateOfVisit" 
                    type="date" 
                    placeholder="Date Of Visit" 
                    onChange={handleChange}
                    value={newReview.dateOfVisit} />
                
                <label htmlFor="pricing">
                    <span><strong>Pricing: </strong></span>
                    <span aria-label="required">*</span>
                </label>
                <select 
                    name="pricing" 
                    id="pricing" 
                    onChange={handleChange} 
                    value={newReview.pricing}>
                        <option value="" disabled selected hidden>Select pricing</option>
                        <option value="£">£</option>
                        <option value="££">££</option>
                        <option value="£££">£££</option>
                        <option value="££££">££££</option>
                        <option value="£££££">£££££</option>
                </select>

                <label htmlFor="rating">
                    <span><strong>Rating: </strong></span>
                    <span aria-label="required">*</span>
                </label>
                <select 
                    name="rating" 
                    id="rating" 
                    onChange={handleChange} 
                    value={newReview.rating}>
                        <option value="" disabled selected hidden>Select rating</option>
                        <option value="EXCELLENT">Excellent</option>
                        <option value="GOOD">Good</option>
                        <option value="AVERAGE">Average</option>
                        <option value="NOT_SATISFIED">Not Satisfied</option>
                        <option value="COMPLETELY_DISSATISFIED">Completely Dissatisfied</option>
                </select>

                <fieldset>
                    <legend><strong>What accessiblility services were available?</strong></legend>
                    <div className="box">
                        <input id="DOG_FRIENDLY" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="DOG_FRIENDLY">Dog Friendly</label>
                    </div>
                    <div className="box">
                        <input id="CHILD_FRIENDLY" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="CHILD_FRIENDLY">Child Friendly</label>
                    </div>
                    <div className="box">
                        <input id="ACCESSIBLE_MENU" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="ACCESSIBLE_MENU">Accessible Menu</label>
                    </div>
                    <div className="box">
                        <input id="WHEELCHAIR_ACCESS" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="WHEELCHAIR_ACCESS">Wheelchair Access</label>
                    </div>
                    <div className="box">
                        <input id="ACCESSIBLE_PARKING" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="ACCESSIBLE_PARKING">Accessible Parking</label>
                    </div>
                    <div className="box">
                        <input id="ACCESSIBLE_BATHROOMS" type="checkbox" name="accessibility" onChange={handleBoxChange} value={newReview.accessibility}/>
                        <label htmlFor="ACCESSIBLE_BATHROOMS">Accessible Bathrooms</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend><strong>What dietary restrictions were available?</strong></legend>
                    <div>
                        <input id="DAIRY_FREE" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="DAIRY_FREE">Dairy Free</label>
                    </div>
                    <div>
                        <input id="NUT_FREE" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="NUT_FREE">Nut Free</label>
                    </div>
                    <div>
                        <input id="FISH_FREE" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="FISH_FREE">Fish Free</label>
                    </div>
                    <div>
                        <input id="GLUTEN_FREE" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="GLUTEN_FREE">Gluten Free</label>
                    </div>
                    <div>
                        <input id="HALAL" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="HALAL">Halal</label>
                    </div>
                    <div>
                        <input id="VEGETARIAN" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="VEGETARIAN">Vegetarian</label>
                    </div>
                    <div>
                        <input id="VEGAN" type="checkbox" name="diet" onChange={handleBoxChange} value={newReview.diet}/>
                        <label htmlFor="VEGAN">Vegan</label>
                    </div>
                </fieldset>

                <label htmlFor="optionalMessage"><strong>Write your review</strong></label>
                <textarea placeholder="Max 200 characters" id="optionalMessage" name="optionalMessage" onChange={handleChange} value={newReview.optionalMessage} rows="4" cols="30" maxLength="100">
                </textarea>
                
                <input id="form-submit-btn" type="submit" name="submit" value="Submit Review"/>
            </form>
        </div>
    );
}
export default ReviewForm;