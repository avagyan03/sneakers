import styles from "./header.module.css";
import logoUrl from"../../Assets/images/logo.png"
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className="logo">
     <img src={logoUrl} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
