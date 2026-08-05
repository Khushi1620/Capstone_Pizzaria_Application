import "./Home.css";

import { Link } from "react-router-dom";

import pizzas from "../../data/pizzas";

function Home() {

  return (

    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>Fresh & Delicious Pizza 🍕</h1>

          <p>
            Hot • Fresh • Cheesy
          </p>

          <p>
            Order your favourite pizza and get it delivered
            to your doorstep in minutes.
          </p>

          <Link to="/menu">
            <button>
              Order Now
            </button>
          </Link>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
            alt="Pizza"
          />

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="features">

        <h2>Why Choose Us?</h2>

        <div className="feature-box">

          <div className="feature">

            <h3>🚚 Fast Delivery</h3>

            <p>
              Get your pizza delivered in 30 minutes.
            </p>

          </div>

          <div className="feature">

            <h3>🧀 Fresh Ingredients</h3>

            <p>
              We use only premium quality ingredients.
            </p>

          </div>

          <div className="feature">

            <h3>👨‍🍳 Expert Chefs</h3>

            <p>
              Prepared by experienced pizza chefs.
            </p>

          </div>

        </div>

      </section>

      {/* Popular Pizzas */}

      <section className="popular">

        <h2>Popular Pizzas</h2>

        <div className="popular-cards">

          {pizzas.slice(0,3).map((pizza) => (

            <div
              key={pizza.id}
              className="popular-card"
            >

              <img
                src={pizza.image}
                alt={pizza.name}
              />

              <h3>{pizza.name}</h3>

              <p>₹{pizza.price}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Reviews */}

      <section className="reviews">

        <h2>Customer Reviews</h2>

        <div className="review-box">

          <p>
            ⭐⭐⭐⭐⭐
          </p>

          <h3>
            "Best Pizza Ever!"
          </h3>

          <p>
            Loved the taste and delivery was super fast.
          </p>

        </div>

      </section>

      {/* Footer */}

      <footer>

        <h2>🍕 Pizzeria</h2>

        <p>
          Fresh Pizza | Fast Delivery | Great Taste
        </p>

        <p>
          © 2026 Pizzeria. All Rights Reserved.
        </p>

      </footer>

    </div>

  );

}

export default Home;