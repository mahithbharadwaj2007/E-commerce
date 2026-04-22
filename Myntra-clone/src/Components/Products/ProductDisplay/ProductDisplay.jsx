import { useEffect } from "react";
import Card from "../Card/Card";
import styles from "./ProductDisplay.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetcher } from "../../../Redux/fetcher.js";
import Loader from "../Loader/Loader";

function ProductDisplay() {
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state.fetchItems);

  useEffect(() => {
    if (items.length === 0) dispatch(fetcher());
  }, [dispatch, items.length]);

  return (
    <>
      {items.length === 0 && <Loader />}
      <div className={`container text-center ${styles.productContainer}`}>
        <div className="row row-cols-4 g-4">
          {items.map((item) => (
            <div className={styles.cardContainer} key={item.id}>
              <Card item={item}></Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
