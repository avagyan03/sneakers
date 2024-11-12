import styles from "./header.module.css";
import logoUrl from "../../Assets/logo.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo}  href="#">
        <img className={styles.logoImg} src={logoUrl} alt="logo" />
        <strong className={styles.logoStrong}>React Sneakers</strong>
        <span className={styles.logoSpan}>Магазин лучших кроссовок</span>
      </a>
    </header>
  );
};

export default Header;
