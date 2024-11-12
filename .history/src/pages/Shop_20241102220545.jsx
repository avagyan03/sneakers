import React from "react";
import Catalog from "../components/Catalog";
import { useShop } from "../hooks/useShop";

export const Shop = () => {
  const { shop } = useShop();
  console.log(shop);
  return (
    <Catalog products={shop.flat()}>
      <h2>moi pokupki</h2>
    </Catalog>
  );
};
