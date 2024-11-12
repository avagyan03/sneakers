import React from "react";
import { Catalog } from "@/components";
import { useShop } from "@/hooks/useShop";

const Shop = () => {
  const { shop, isLoading } = useShop();
  console.log(shop.flat());
  return (
    <Catalog products={shop.flat()} isLoading={isLoading}>
      <h2>Мои покупки</h2>
    </Catalog>
  );
};

export default Shop;
