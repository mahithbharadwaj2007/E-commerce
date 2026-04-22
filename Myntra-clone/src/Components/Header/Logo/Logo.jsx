import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../../images/Myntra-Logo.png";
function Logo() {
  return (
    <Link to="/" className={styles.nav_logo}>
      <img src={logo} alt="Myntra Logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
