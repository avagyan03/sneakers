import { useState } from "react";
import Search from "../Search";
import styles from "./catalog.module.css";
import Card from "../Card";
import { useLocation } from "react-router-dom";

 export const Catalog = (props) => {
  const { products, children } = props;

  const [searchValue, setSearchValue] = useState("");

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          {children}
          <Search value={searchValue} setValue={setSearchValue} />
        </div>
        <ul className={styles.list}>
          {products
            .filter((obj) =>
              obj.title?.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <li key={index}>
                <Card {...obj} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};


