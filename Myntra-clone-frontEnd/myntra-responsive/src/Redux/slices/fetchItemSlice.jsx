import { createSlice } from "@reduxjs/toolkit";

const fetchItemSlice = createSlice({
  name: "fetchItems",
  initialState: {
    loading: false,
    items: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
  },
});

export const fetchItemActions = fetchItemSlice.actions;
export default fetchItemSlice;
