import { useState } from "react";
import styles from "./Card.module.css";
import clsx from "clsx";
import Icon from "../Icon";
import { useFavorite } from "../../hooks/useFavorite";
import { useBasket } from "../../hooks/useBasket";

function Card(props) {

  const { addFavorite, isFindFavorite } = useFavorite();
  const {
    id,
    img,
    title,
    price,
  } = props;

  return (
    <article className={styles.item}>
      <button
        className={clsx(
          styles.favoriteButton,
          isFindFavorite(id) === id && styles.favoriteButtonActive,
        )}
        onClick={() => addFavorite({ id, img, title, price })}
      >
        <Icon className={styles.favorite} id="favorite" />
      </button>
      <img className={styles.img} src={img} alt="sneakers" />
      <h3 className={styles.itemTitle}>{title}</h3>
      <div className={styles.wrapper}>
        <span className={styles.span}>Цена:</span>
        <span className={styles.price}>{price} руб.</span>
        <button
          className={clsx(
            styles.plusButton,
            isFindProduct(id) === id && styles.plusButtonActive,
          )}
          onClick={() => {
            create({
              id,
              img,
              title,
              price,
            });
          }}
        >
          <Icon
            className={styles.plus}
            id={isFindProduct(id) === id ? "checked" : "plus"}
          />
        </button>
      </div>
    </article>
  );
}

export default Card;
