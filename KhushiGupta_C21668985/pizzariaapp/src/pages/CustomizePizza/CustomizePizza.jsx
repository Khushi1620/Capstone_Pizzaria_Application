import "./CustomizePizza.css";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import pizzas from "../../data/pizzas";
import ingredients from "../../data/ingredients";

import { updateCustomizedPizza } from "../../redux/slices/cartSlice";

function CustomizePizza() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pizza = pizzas.find(
    (item) => item.id === id
  );

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Increase Ingredient Quantity
  const handleIncreaseIngredient = (ingredient) => {

    const existingIngredient = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (existingIngredient) {

      setSelectedIngredients(
        selectedIngredients.map((item) =>
          item.id === ingredient.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setSelectedIngredients([
        ...selectedIngredients,
        {
          ...ingredient,
          quantity: 1,
        },
      ]);

    }

  };

  // Decrease Ingredient Quantity
  const handleDecreaseIngredient = (ingredient) => {

    const existingIngredient = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (!existingIngredient) return;

    if (existingIngredient.quantity > 1) {

      setSelectedIngredients(
        selectedIngredients.map((item) =>
          item.id === ingredient.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
      );

    } else {

      setSelectedIngredients(
        selectedIngredients.filter(
          (item) => item.id !== ingredient.id
        )
      );

    }

  };

  // Calculate Ingredient Price
  const ingredientPrice = selectedIngredients.reduce(
    (total, item) => {
      return total + item.price * item.quantity;
    },
    0
  );

  // Final Pizza Price
  const finalPrice = pizza.price + ingredientPrice;

  // Save Customized Pizza
  const handleAddCustomizedPizza = () => {

    dispatch(
      updateCustomizedPizza({

        id: pizza.id,

        finalPrice: finalPrice,

        selectedIngredients: selectedIngredients,

      })
    );

    navigate("/cart");

  };

  return (

    <div className="customize-container">

      <h1>Customize Pizza</h1>

      <img
        src={pizza.image}
        alt={pizza.name}
        className="pizza-image"
      />

      <h2>{pizza.name}</h2>

      <p>{pizza.description}</p>

      <h3>Base Price : ₹{pizza.price}</h3>

      <hr />

      <h2>Extra Ingredients</h2>

      {

        ingredients.map((ingredient) => {

          const selectedIngredient = selectedIngredients.find(
            (item) => item.id === ingredient.id
          );

          return (

            <div
              key={ingredient.id}
              className="ingredient-card"
            >

              <img
                src={ingredient.image}
                alt={ingredient.tname}
              />

              <div className="ingredient-info">

                <h4>{ingredient.tname}</h4>

                <p>₹{ingredient.price}</p>

              </div>

              <button
                className="ingredient-btn"
                onClick={() =>
                  handleDecreaseIngredient(
                    ingredient
                  )
                }
              >
                -
              </button>

              <span className="ingredient-quantity">

                {
                  selectedIngredient
                    ? selectedIngredient.quantity
                    : 0
                }

              </span>

              <button
                className="ingredient-btn"
                onClick={() =>
                  handleIncreaseIngredient(
                    ingredient
                  )
                }
              >
                +
              </button>

            </div>

          );

        })

      }

      <hr />

      <h2>
        Ingredient Price : ₹{ingredientPrice}
      </h2>

      <h1>
        Total Price : ₹{finalPrice}
      </h1>

      <button
        className="customize-save-btn"
        onClick={handleAddCustomizedPizza}
      >
        Add Customized Pizza
      </button>

    </div>

  );

}

export default CustomizePizza;