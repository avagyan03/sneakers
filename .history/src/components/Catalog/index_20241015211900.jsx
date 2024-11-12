import { useState } from "react";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 12999 
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    img: "img/sneakers2.png",
    price: 12999 
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers3.png",
    price: 8499 
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 12999 
  },
];

const Catalog = () => {
  const [searchValue, setSearchValue] = useState("");
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
            <li className={styles.item} key={index + 1}>
         <button className={styles.favoriteButton}>     <Icon className={styles.favorite} id="favorite" /></button>
              <img
                className={styles.img}
                src={obj.img}
                alt="sneakers"
              />
              <h3 className={styles.itemTitle}>
               {obj.title}
              </h3>
              <div className={styles.wrapper}>
                <span className={styles.span}>Цена:</span>
                <span className={styles.price}>{obj.price} руб.</span>
           <button className={styles.plusButton}><Icon className={styles.plus} id="plus" /></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
