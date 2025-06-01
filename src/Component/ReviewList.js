import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://python-2-2unq.onrender.com/feedbacks')
      .then(res => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load reviews');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map(r => (
            <li key={r.id} className="mb-3">
              <strong>{r.user}</strong>: {r.comment} <br />
              {[1, 2, 3, 4, 5].map(i => (
                <span
                  key={i}
                  className={`text-xl ${i <= r.rating ? "text-yellow-500" : "text-gray-400"}`}
                >
                  ★
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
