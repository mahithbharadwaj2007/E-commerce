import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../Redux/slices/cartItemsSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cartItems);

  const handleDeleteFromCart = (item) => {
    dispatch(cartItemActions.deleteFromCart(item));
  };

  const handlePlus = (item) => {
    dispatch(cartItemActions.increment(item));
  };

  const handleMinus = (item) => {
    dispatch(cartItemActions.decrement(item));
  };

  return (
    <>
      <div className="container mt-4 px-2 px-md-3">
        {/* Header — hidden on mobile, shown on md+ */}
        <div className="d-none d-md-flex row fw-bold border-bottom pb-2 mb-3 text-center">
          <div className="col-1">SI</div>
          <div className="col-2">Image</div>
          <div className="col-4">Title</div>
          <div className="col-2">Quantity</div>
          <div className="col-2">Price</div>
          <div className="col-1">Remove</div>
        </div>

        {/* Cart Items */}
        {cartItems.map((item, index) =>
          item.quantity < 1 ? (
            handleDeleteFromCart(item)
          ) : (
            <div
              key={item.id}
              className="border rounded p-2 mb-3 shadow-sm"
            >
              {/* Desktop row layout */}
              <div className="d-none d-md-flex align-items-center text-center row">
                <div className="col-1">{index + 1}</div>
                <div className="col-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-4 text-start">{item.title}</div>
                <div className="col-2">
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => handleMinus(item)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => handlePlus(item)}>+</button>
                </div>
                <div className="col-2 fw-bold">₹{(item.quantity * item.price).toFixed(2)}</div>
                <div className="col-1">
                  <button className="btn btn-sm btn-danger" onClick={() => handleDeleteFromCart(item)}>X</button>
                </div>
              </div>

              {/* Mobile card layout */}
              <div className="d-flex d-md-none gap-3 align-items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "contain", flexShrink: 0 }}
                />
                <div className="flex-grow-1">
                  <p className="mb-1 fw-semibold" style={{ fontSize: "13px" }}>{item.title}</p>
                  <p className="mb-1 fw-bold">₹{(item.quantity * item.price).toFixed(2)}</p>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleMinus(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handlePlus(item)}>+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => handleDeleteFromCart(item)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* Total */}
        <div className="d-flex justify-content-between fw-bold border-top pt-3 mt-3 px-2">
          <span>Total</span>
          <span>
            ₹{cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
}

export default Cart;
