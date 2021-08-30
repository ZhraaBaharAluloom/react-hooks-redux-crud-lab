import React from "react";
import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  const restaurantsList = restaurants.map((restaurant) => (
    <Restaurant restaurant={restaurant} key={restaurant.id} />
  ));
  return <ul>{restaurantsList}</ul>;
}

export default Restaurants;
