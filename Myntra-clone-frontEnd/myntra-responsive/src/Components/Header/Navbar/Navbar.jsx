import { useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <Logo />
        {/* Desktop nav links */}
        <div className={styles.navLinks}>
          <NavLinks />
        </div>
        <SearchBar />
        <CartIcon />
        {/* Hamburger for mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className={styles.navDrawer}>
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Header;
