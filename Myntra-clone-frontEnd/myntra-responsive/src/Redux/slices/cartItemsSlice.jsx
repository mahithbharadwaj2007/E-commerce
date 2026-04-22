import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      let newState;
      const item = state.find((item) => item.id == action.payload.id);
      if (item) {
        newState = state.map((items) => {
          if (items.id == action.payload.id) {
            return { ...items, quantity: items.quantity + 1 };
          }
          return items;
        });
      } else {
        newState = [...state, action.payload];
      }
      return newState;
    },
    deleteFromCart: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    },
    increment: (state, action) => {
      const item = state.find((item) => item.id == action.payload.id);
      if (item) item.quantity += 1;
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.id == action.payload.id);
      if (item) item.quantity -= 1;
    },
  },
});

export const cartItemActions = cartItemSlice.actions;
export default cartItemSlice;
