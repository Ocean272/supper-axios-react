import React, { useState, useContext } from "react";
import API from "../screens/API";
import { UserContext } from "./UserContext";

const ReviewForm = () => {
  const {user} = useContext(UserContext);
  const [review, setReview] = useState({
    //location_id: "",
    user_id:  "",
    review: ""

  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const requestReviewData = {
         // location_id: location_id,
          user_id : user.id,
          review: review
        }
        await API.post("user/newreview", requestReviewData);
      } catch (err) {
        console.log("Error", "something went wrong")
      }
      setReview();
  }

  return (
    <div>
      ReviewForm
      <form onSubmit={handleSubmit}>
        <label>
          Your Review:
          <textarea 
          type="text"
          value={review}
          name="Your comments here"
          onChange={e => setReview(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm;
