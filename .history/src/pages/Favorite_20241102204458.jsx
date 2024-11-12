import React from "react";
import Catalog from "../components/Catalog";
import Empty from "../components/Empty";
import { useFavorite } from "../hooks/useFavorite";

export const Favorite = () => {
  const { favorites } = useFavorite();

  return (
    <main>
      {favorites.length > 0 ? (
        <Catalog
          products={favorites}
          isFindProduct={isFindProduct}
          addProduct={addProduct}
        >
          <h2>все закладки</h2>
        </Catalog>
      ) : (
        <Empty
          title="Закладок нет :("
          text="Вы ничего не добавляли в закладки"
          imgUrl="img/emptyFavorite.png"
        />
      )}
    </main>
  );
};
