import styles from "./basket.module.css";
import { Icon } from "../index";
import { useState } from "react";
import clsx from "clsx";
import { useBasket } from "@/hooks/useBasket";

const card = (props) => {
  const {  title, price, img ,id} = props;
  const { removeProduct } = useBasket();
  const [loading, setLoading] = useState(false);

  const onClickRemoveCard = async () => {
    setLoading(true);
    await removeProduct(id);
    setLoading(false);
  };
  return (
    <div>
      <div className={styles.cartItem} key={id}>
        <img className={styles.img} src={img} alt="Sneakers" />
        <div className={styles.cartContent}>
          <p className={styles.cartItemTitle}>{title}</p>
          <span className={styles.span}>{price} руб.</span>
        </div>
        <button
          disabled={loading}
          className={clsx(styles.buttonClose, loading && styles.loading)}
          onClick={ onClickRemoveCard}
        >
          <Icon className={styles.icon} id={"close"} />
        </button>
      </div>
    </div>
  );
};

export default card;
