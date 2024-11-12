import Icon from "../Icon";
import styles from "./search.module.css";
const Search = () => {
  return (
    <label className={styles.label}>
      <Icon className={styles.Icon} id="search" />
      <input className={styles.input} type="text" placeholder="Поиск..." />
    </label>
  );
};

export default Search;
