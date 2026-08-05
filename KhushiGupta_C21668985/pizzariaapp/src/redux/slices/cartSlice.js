import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to Cart
    addToCart(state, action) {
      const existingPizza = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingPizza) {
        existingPizza.quantity = existingPizza.quantity + 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Increase Quantity
    increaseQuantity(state, action) {
      const pizza = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (pizza) {
        pizza.quantity = pizza.quantity + 1;
      }
    },

    // Decrease Quantity
    
   decreaseQuantity(state, action) {
    const pizza = state.cartItems.find(
        (item) => item.id === action.payload
    );

    if (pizza.quantity > 1) {
        pizza.quantity--;
    } else {
        state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
        );
    }
},

// clear cart slice
clearCart(state) {
    state.cartItems = [];
},

    // Remove From Cart
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // update customized pizza
    updateCustomizedPizza(state, action) {
       const pizza = state.cartItems.find(
        (item) => item.id === action.payload.id
    );

    if (pizza) {

        pizza.price = action.payload.finalPrice;

        pizza.selectedIngredients =
            action.payload.selectedIngredients;

    }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  updateCustomizedPizza,
} = cartSlice.actions;

export default cartSlice.reducer;