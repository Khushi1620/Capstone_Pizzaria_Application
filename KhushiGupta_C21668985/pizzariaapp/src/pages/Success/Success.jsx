import "./Success.css";

import { Link, useNavigate } from "react-router-dom";

function Success() {

  const navigate = useNavigate();

  return (

    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">

          ✅

        </div>

        <h1>Order Placed Successfully!</h1>

        <p>

          Thank you for ordering from

          <strong> Pizzeria</strong>.

        </p>

        <p>

          Your delicious pizza is being prepared 🍕

        </p>

        <div className="success-buttons">

          <Link to="/">

            <button className="home-btn">

              Back To Home

            </button>

          </Link>

          <button
            className="feedback-btn"
            onClick={() => navigate("/feedback")}
          >

            Give Feedback

          </button>

        </div>

      </div>

    </div>

  );

}

export default Success;