import poster from "../../../images/Myntra-hero.jpg";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate("/products");
  };

  return (
    <>
      <img src={poster} alt="Hero-Banner" className={styles.banner} />
      <div className={styles.heroText}>
        <h1 className={styles.heading}>Fashion That Speaks Your Style</h1>
        <p>
          Discover the latest trends in clothing, footwear, and accessories for
          every occasion.
        </p>
        <button className={styles.button} onClick={onBtnClick}>
          Shop Now
        </button>
      </div>
    </>
  );
}

export default Hero;
