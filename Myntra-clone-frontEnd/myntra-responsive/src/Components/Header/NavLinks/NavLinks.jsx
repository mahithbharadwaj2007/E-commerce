import styles from "./NavLinks.module.css";
function NavLinks() {
  const links = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];

  return (
    <>
      {links.map((link) => (
        <a href="#" className={styles.a} key={link}>
          {link}
        </a>
      ))}
    </>
  );
}

export default NavLinks;
