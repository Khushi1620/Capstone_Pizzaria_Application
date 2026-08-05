import "./Feedback.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Feedback() {

  const navigate = useNavigate();

  const [rating, setRating] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Thank you for your feedback ❤️");

    setRating("");

    setMessage("");

    navigate("/");

  };

  return (

    <div className="feedback-container">

      <div className="feedback-card">

        <h1>Share Your Feedback 🍕</h1>

        <form onSubmit={handleSubmit}>

          <label>Rate your experience</label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Bad</option>
          </select>

          <label>Your Feedback</label>

          <textarea
            rows="6"
            placeholder="Tell us what you liked..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit">

            Submit Feedback

          </button>

        </form>

      </div>

    </div>

  );

}

export default Feedback;