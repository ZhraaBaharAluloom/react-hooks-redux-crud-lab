import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {
  const reviewsList = reviews.map((review) => (
    <Review review={review} key={review.id} />
  ));
  return <ul>{reviewsList}</ul>;
}

export default Reviews;
