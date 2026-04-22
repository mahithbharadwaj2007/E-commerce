import CartIcon from "../CartIcon/CartIcon";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <Logo></Logo>
        <NavLinks></NavLinks>
        <SearchBar></SearchBar>
        <CartIcon></CartIcon>
      </div>
    </>
  );
}

export default Header;
