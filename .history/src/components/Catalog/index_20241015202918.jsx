import { useState } from "react";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: "12 999 руб.",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    img: "img/sneakers2.png",
    price: "12 999 руб.",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: "8 499 руб.",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers1.png",
    price: "12 999 руб.",
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
          {sneakers.map((obj) => (
            <li className={styles.item} key={obj.title}>
              <Icon className={styles.favorite} id="favorite" />
              <img
                className={styles.img}
                src="img/sneakers1.png"
                alt="sneakers"
              />
              <h3 className={styles.itemTitle}>
               {obj.title}
              </h3>
              <div className={styles.wrapper}>
                <span className={styles.span}>Цена:</span>
                <span className={styles.price}>12 999 руб.</span>
                <Icon className={styles.plus} id="plus" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
