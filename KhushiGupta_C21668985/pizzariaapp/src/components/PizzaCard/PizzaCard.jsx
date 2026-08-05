import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";

import "./PizzaCard.css";

function PizzaCard({ pizza }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(pizza));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(pizza.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(pizza.id));
  };

  const handleCustomize = () => {
    navigate(`/customize/${pizza.id}`);
  };

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const cartPizza = cartItems.find(
    (item) => item.id === pizza.id
  );

  return (

    <div className="pizza-card">

      <img
        src={pizza.image}
        alt={pizza.name}
        className="pizza-image"
      />

      <h2>{pizza.name}</h2>

      <p>{pizza.description}</p>

      <h3 className="price">
        ₹{pizza.price}
      </h3>

      {cartPizza ? (
        <>

          <div className="quantity-controls">

            <button onClick={handleDecrease}>
              −
            </button>

            <span>{cartPizza.quantity}</span>

            <button onClick={handleIncrease}>
              +
            </button>

          </div>

          <button
            className="customize-btn"
            onClick={handleCustomize}
          >
            Customize Pizza
          </button>

        </>
      ) : (

        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>

      )}

    </div>

  );
}

export default PizzaCard;