import React, { useState } from "react";

const ReviewForm = () => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
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
          name="Your comments here"
          onChange={e => setReview(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ReviewForm;
