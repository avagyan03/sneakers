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
        products={products}
      >
        <h2>Все кроссовки</h2>
      </Catalog>
    </main>
  );
};
