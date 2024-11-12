import styles from "./header.module.css";
import logoUrl from "../../Assets/logo.png";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.logo}  href="#">
        <img className={styles.logoImg} src={logoUrl} alt="logo" width={40} height={40} />
        <strong className={styles.logoStrong}>React Sneakers</strong>
        <span className={styles.logoSpan}>Магазин лучших кроссовок</span>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="#"></a>
            </li>
            <li className={styles.navItem}>
            <a className={styles.navLink} href="#"></a>
            </li>
            <li className={styles.navItem}>
            <a className={styles.navLink} href="#"></a>
            </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header;
