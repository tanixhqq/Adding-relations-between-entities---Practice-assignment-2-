import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${hoveredRating >= star || rating >= star ? 'filled' : ''}`}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} disabled={rating === 0}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;