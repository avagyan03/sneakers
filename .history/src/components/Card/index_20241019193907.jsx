import { useState } from "./Card.module.css"
import styles from "./Card.module.css";
import clsx from "clsx";
import Icon from "../Icon";
// import {obj} from './obj';

function Card(props) {
  const [img, title, price] = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlus, setIsPlus] = useState("");
  const onClickPlus = () => {
    setIsPlus(!isPlus);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <article className={styles.item}>
      <button
        className={clsx(
          styles.favoriteButton,
          isFavorite && styles.favoriteActive
        )}
        onClick={onClickFavorite}
      >
        <Icon className={styles.favorite} id="favorite" />
      </button>
      <img className={styles.img} src={img} alt="sneakers" />
      <h3 className={styles.itemTitle}>{title}</h3>
      <div className={styles.wrapper}>
        <span className={styles.span}>Цена:</span>
        <span className={styles.price}>{price} руб.</span>
        <button
          className={clsx(styles.plusButton, isPlus && styles.plusButtonActive)}
          onClick={onClickPlus}
        >
          <Icon className={styles.plus} id={isPlus ? "checked" : "plus"} />
        </button>
      </div>
    </article>
  );
}

export default Card;