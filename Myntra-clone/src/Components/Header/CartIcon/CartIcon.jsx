import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartIcon.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartIcon({ count }) {
  const items = useSelector((store) => store.cartItems);
  count = items.length;
  return (
    <Link to="/cart" className={styles.cart_container}>
      <FaShoppingCart size={28} />
      {count > 0 && <span className={styles.cart_badge}>{count}</span>}
      <div>Cart</div>
    </Link>
  );
}

export default CartIcon;
