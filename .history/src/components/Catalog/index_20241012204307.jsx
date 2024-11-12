import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const Catalog = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
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
          <h2 className={styles.title}>Все кроссовки</h2>
          <Search />
        </div>
       
      </div>
    </section>
  );
};

export default Catalog;
