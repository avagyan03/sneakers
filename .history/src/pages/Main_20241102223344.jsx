import React from "react";
import Catalog from "../components/Catalog";
import Slider from "../components/Slider";
import { useProducts } from "../hooks/useProducts";

export const Main = () => {
  const { products } = useProducts();
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
