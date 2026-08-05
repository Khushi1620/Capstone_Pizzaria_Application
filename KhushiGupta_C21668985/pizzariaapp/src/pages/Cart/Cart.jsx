import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/slices/cartSlice";
import {useNavigate} from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total number of pizzas
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  // Calculate grand total
  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your Cart is Empty 🛒</h2>
      ) : (
        <>
          {cartItems.map((pizza) => (
            <div key={pizza.id} className="cart-item">

              <img
                src={pizza.image}
                alt={pizza.name}
                width="180"
              />

              <div className="cart-details">

                <h2>{pizza.name}</h2>
                {
  pizza.selectedIngredients &&
  pizza.selectedIngredients.length > 0 && (

    <div className="ingredients-box">

      <h4>Extra Ingredients</h4>

      {
        pizza.selectedIngredients.map((ingredient) => (

          <p key={ingredient.id}>

            • {ingredient.tname} × {ingredient.quantity}

          </p>

        ))
      }

    </div>

  )
}

                <p>{pizza.description}</p>

                <h3>Price : ₹{pizza.price}</h3>

                <h3>
                  Subtotal : ₹
                  {pizza.price * pizza.quantity}
                </h3>

                <div className="quantity-box">

                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(pizza.id))
                    }
                  >
                    -
                  </button>

                  <span>{pizza.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(pizza.id))
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            </div>
          ))}

          <hr />

          <div className="cart-summary">
            <h2>Total Items : {totalItems}</h2>

            <h2>Grand Total : ₹{grandTotal}</h2>

            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;