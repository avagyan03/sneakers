import styles from "./header.module.css";
import logoUrl from"../../Assets/logo.png"
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className="logo">
     <img src={logoUrl} alt="logo" />
     <strong>React Sneakers</strong>
     <span>Магазин лучших кроссовок</span>
      </a>
    </header>
  );
};

export default Header;
