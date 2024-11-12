import { useState } from "react";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    img: "img/sneakers2.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers3.png",
    price: 8499,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers5.png",
    price: 15199,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers6.png",
    price: 11299 
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers7.png",
    price: 15199,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers8.png",
    price: 15199,
  },

];

const Catalog = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {searchValue ? searchValue : "Все кроссовки"}
          </h2>
          <Search value={searchValue} setValue={setSearchValue} />
        </div>
        <ul className={styles.list}>
          {sneakers.map((obj, index) => (
            <li className={styles.item} key={index}>
              <button
                className={
                  isFavorite
                    ? styles.favoriteButton + " " + styles.favoriteButtonActive
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
                <button className={styles.plusButton}>
                  <Icon className={styles.plus} id="plus" />
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
