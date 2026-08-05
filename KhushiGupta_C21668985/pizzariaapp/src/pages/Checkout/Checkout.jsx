import "./Checkout.css";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {

    dispatch(clearCart());

    navigate("/success");

  };

  return (

    <div className="checkout-container">

      <h1>Checkout</h1>

      <h2 className="summary-title">
        Order Summary
      </h2>

      {

        cartItems.map((pizza) => (

          <div
            key={pizza.id}
            className="checkout-card"
          >

            <img
              src={pizza.image}
              alt={pizza.name}
              className="checkout-image"
            />

            <div className="checkout-details">

              <h3>{pizza.name}</h3>

              {
                pizza.selectedIngredients &&
                pizza.selectedIngredients.length > 0 && (

                  <div className="ingredient-box">

                    <h4>Extra Ingredients</h4>

                    {

                      pizza.selectedIngredients.map(
                        (ingredient) => (

                          <p key={ingredient.id}>

                            • {ingredient.tname} × {ingredient.quantity}

                          </p>

                        )
                      )

                    }

                  </div>

                )
              }

              <p>

                ₹{pizza.price} × {pizza.quantity}

              </p>

              <h3 className="subtotal">

                Subtotal : ₹{pizza.price * pizza.quantity}

              </h3>

            </div>

          </div>

        ))

      }

      <div className="checkout-summary">

        <h2>

          Total Items : {totalItems}

        </h2>

        <h2>

          Grand Total : ₹{grandTotal}

        </h2>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
        >

          Place Order

        </button>

      </div>

    </div>

  );

}

export default Checkout;