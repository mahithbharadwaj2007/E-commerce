import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { cartItemActions } from "../../../Redux/slices/cartItemsSlice";

function Card({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCardClick = () => {
    navigate(`/products/${item.id}`);
  };

  const handleAddToCart = () => {
    dispatch(cartItemActions.addToCart(item));
  };

  return (
    <>
      <div className={`card ${styles.cards} h-100`} style={{ width: "18rem" }}>
        <img
          src={item.image}
          className={`card-img-top ${styles.image}`}
          alt="..."
          onClick={onCardClick}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.title}</h5>
          <div className="mt-auto">
            <p className="card-text" style={{ fontWeight: 600 }}>
              Cost : {"\u20B9"}
              {item.price}
            </p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
