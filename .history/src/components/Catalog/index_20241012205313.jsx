import { useState } from "react";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const Catalog = () => {
  const [searchValue, setSearchValue] = useState("g");

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{searchValue ? searchValue : "Все кроссовки"}</h2>
          <Search />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Icon className={styles.favorite} id="favorite">
              <img className={styles.img} src="img/sneakers.jpg" alt="" />
              <h3 className={styles.title}>
                Мужские Кроссовки Nike Blazer Mid Suede
              </h3>
              <div className={styles.priceBox}>
                <span className={styles.priceTitle}>Цена:</span>
                <span className={styles.price}>12 999 руб.</span>
                <Icon className={styles.plus} id="plus"></Icon>
              </div>
            </Icon>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
