import { configureStore } from "@reduxjs/toolkit";
import cartItemSlice from "./slices/cartItemsSlice";
import fetchItemSlice from "./slices/fetchItemSlice";

const cartStore = configureStore({
  reducer: {
    cartItems: cartItemSlice.reducer,
    fetchItems: fetchItemSlice.reducer,
  },
});

export default cartStore;
