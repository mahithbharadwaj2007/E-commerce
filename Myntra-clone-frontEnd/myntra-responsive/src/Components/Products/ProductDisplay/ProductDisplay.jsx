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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {items.map((item) => (
            <div className={`col ${styles.cardContainer}`} key={item.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
