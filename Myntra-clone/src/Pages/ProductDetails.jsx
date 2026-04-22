import { cartItemActions } from "../Redux/slices/cartItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Components/Products/Loader/Loader";
import { useEffect } from "react";
import { fetcher } from "../Redux/fetcher.js";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { items, loading } = useSelector((state) => state.fetchItems);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetcher());
    }
  }, [dispatch, items.length]);

  const item = items.find((item) => item.id === Number(id));

  const handleAddToCart = () => {
    dispatch(cartItemActions.addToCart(item));
  };

  return (
    <>
      {loading && <Loader />}
      {item && (
        <div
          className="card mb-3 mt-5 ms-5 d-flex align-items-center justify-content-center"
          style={{ width: "92%", minHeight: "400px" }}
        >
          <div className="row g-0 d-flex align-items-center justify-content-center">
            <div className="col-md-4">
              <img
                src={item.image}
                className="img-fluid rounded-start   "
                alt="..."
                style={{ height: "300px", objectFit: "contain", width: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="border border-secondary rounded px-2 py-1 d-inline-block">
                  <b>{item.rating.rate}</b>⭐ | {item.rating.count}k Ratings
                </div>
                <hr />

                <h3 className="fw-bold mb-0">
                  {"\u20B9"}
                  {item.price}
                </h3>
                <p
                  className="fw-bold mt-0"
                  style={{ font: "14px", color: "#03A685" }}
                >
                  inclusive all taxes
                </p>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
