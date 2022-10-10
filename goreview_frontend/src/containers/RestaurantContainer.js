import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantList";

const RestaurantContainer = ({restaurants, reviews}) => {

    

    return (
        <div id="container">
            <RestaurantList restaurants={restaurants} reviews={reviews} />
        </div>
    )

}

export default RestaurantContainer;