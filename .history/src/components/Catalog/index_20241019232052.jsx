import { useState } from "react";
import clsx from "clsx";
import Search from "../Search";
import styles from "./catalog.module.css";
import Icon from "../Icon";
import Card from "../Card";

const Catalog = (props) => {
  const { products, addProduct, isSomeProduct } = props;
  const [searchValue, setSearchValue] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  // const [isPlus, setIsPlus] = useState("");

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {searchValue ? "result: " + searchValue : "Все кроссовки"}
          </h2>
          <Search value={searchValue} setValue={setSearchValue} />
        </div>
        <ul className={styles.list}>
          {products
            .filter((obj) =>
              obj.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <li key={index}>
                <Card
                  {...obj}
                  create={addProduct}
                  isSomeProduct={isSomeProduct}
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
