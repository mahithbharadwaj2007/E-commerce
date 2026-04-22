import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className={styles.nav_search}>
      <input
        type="text"
        placeholder="Search for products, brands and more"
        className={styles.search_input}
      />
      <div className={styles.search_icon}>
        <FaSearch className={styles.search} />
      </div>
    </div>
  );
}

export default SearchBar;
