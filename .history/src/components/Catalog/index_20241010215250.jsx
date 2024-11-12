import Search from "../Search";
import styles from "./catalog.module.css";

const Catalog = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}></h2>
          <Search />
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
