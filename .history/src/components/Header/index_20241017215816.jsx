import styles from "./header.module.css";
import logoUrl from "../../Assets/logo.png";
import Icon from "../Icon";
import { useState } from "react";
const navLinks = [
  {
    id: "basket",
    link: "#",
    text: " 1205 руб.",
  },
  {
    id: "favorite",
    link: "#",
    text: "Закладки ",
  },
  {
    id: "profile",
    link: "#",
    text: "Профиль",
  },
];
const Header = ({ OnClickToBasket}) => {
  const [navIsopen, setNavIsopen] = useState(false);

  const onClichToBasket = () => {
    OnClickToBasket()
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#">
          <img
            className={styles.logoImg}
            src={logoUrl}
            alt="logo"
            width={40}
            height={40}
          />
          <strong className={styles.logoStrong}>React Sneakers</strong>
          <span className={styles.logoSpan}>Магазин лучших кроссовок</span>
        </a>
        <nav className={navIsopen ? styles.nav + " " + styles.navActive : styles.nav }>
          <ul className={styles.navList}>
            {navLinks.map((obj) => (
              <li className={styles.navItem} key={obj.text}>
                <a className={styles.navLink} href={obj.link}>
                  <Icon id={obj.id} className={styles.icon} />
                  {obj.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={styles.burger}
          onClick={() => {
            setNavIsopen(!navIsopen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
