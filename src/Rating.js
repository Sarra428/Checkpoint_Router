import ReactStars from "react-rating-stars-component";
import React from "react";


function Rating({setNewrating}){
    const ratingChanged = (newRating) => {
      setNewrating(newRating);
      };
    
    return (
    <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    );
}

export default Rating
