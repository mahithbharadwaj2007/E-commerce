import { fetchItemActions } from "./slices/fetchItemSlice";

export const fetcher = () => async (dispatch) => {
  dispatch(fetchItemActions.fetchStart());

  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const updatedData = data.map((item) => ({
    ...item,
    quantity: 1,
  }));
  dispatch(fetchItemActions.fetchSuccess(updatedData));
};
