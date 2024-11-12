import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";

const Catalog = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Все кроссовки</h2>
          <Search />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Icon className={styles.icon} id="favorite">
              <img className={styles.img} src="" alt="" />
            </Icon>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
