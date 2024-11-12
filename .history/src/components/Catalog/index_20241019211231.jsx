import { useState } from "react";
import clsx from "clsx";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";
import Card from "../Card";



const Catalog = (props) => {
  const  {products} = props
  const [searchValue, setSearchValue] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  // const [isPlus, setIsPlus] = useState("");

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {searchValue ? "result: " + searchValue : "Все кроссовки"}
          </h2>
          <Search value={searchValue} setValue={setSearchValue} />
        </div>
        <ul className={styles.list}>
          {products
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <li key={index}>
                <Card>{obj}</Card>
                <button
                  className={
                    isFavorite
                      ? styles.favoriteButton +
                        " " +
                        styles.favoriteButtonActive
                      : styles.favoriteButton
                  }
                  style={{
                    color: isFavorite && "#ff8585",
                    backgroundColor: isFavorite && "#fef0f0",
                  }}
                  onClick={onClickFavorite}
                >
                  <Icon className={styles.favorite} id="favorite" />
                </button>
                <img className={styles.img} src={obj.img} alt="sneakers" />
                <h3 className={styles.itemTitle}>{obj.title}</h3>
                <div className={styles.wrapper}>
                  <span className={styles.span}>Цена:</span>
                  <span className={styles.price}>{obj.price} руб.</span>
                  <button
                    className={
                      clsx()
                      // styles.plusButton,
                      // isPlus && styles.plusButtonActive
                    }
                    // onClick={onClickPlus}
                  >
                    <Icon
                      className={styles.plus}
                      // id={isPlus ? "checked" : "plus"}
                    />
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
