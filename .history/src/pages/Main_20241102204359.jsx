import React from "react";
import Catalog from "../components/Catalog";
import Slider from "../components/Slider";

export const Main = (props) => {
  const {
    products,
  } = props;
  return (
    <main>
      <Slider />
      <Catalog
        isFindFavorite={isFindFavorite}
        addFavorite={addFavorite}
        products={products}
        isFindProduct={isFindProduct}
        addProduct={addProduct}
      >
        <h2>Все кроссовки</h2>
      </Catalog>
    </main>
  );
};
