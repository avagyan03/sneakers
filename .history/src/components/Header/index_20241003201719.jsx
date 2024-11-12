import styles from "./header.module.css";
import logoUrl from "../../Assets/logo.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className="logo">
        <img className={styles.logoimg} src={logoUrl} alt="logo" />
        <strong className={styles.logostrong}>React Sneakers</strong>
        <span className={styles.logospan}>Магазин лучших кроссовок</span>
      </a>
    </header>
  );
};

export default Header;
