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
          className="card mb-3 mt-4 mx-auto"
          style={{ width: "95%", minHeight: "400px" }}
        >
          <div className="row g-0 d-flex align-items-center justify-content-center flex-column flex-md-row">
            <div className="col-12 col-md-4 text-center">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={item.title}
                style={{ height: "260px", objectFit: "contain", width: "100%", maxWidth: "300px" }}
              />
            </div>
            <div className="col-12 col-md-8">
              <div className="card-body px-3 px-md-4">
                <h5 className="card-title fw-bold fs-4 fs-md-2">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <div className="border border-secondary rounded px-2 py-1 d-inline-block">
                  <b>{item.rating.rate}</b>⭐ | {item.rating.count}k Ratings
                </div>
                <hr />
                <h3 className="fw-bold mb-0">
                  {"₹"}{item.price}
                </h3>
                <p className="fw-bold mt-0" style={{ font: "14px", color: "#03A685" }}>
                  inclusive all taxes
                </p>
                <button className="btn btn-primary w-100 w-md-auto" onClick={handleAddToCart}>
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
