import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./style/vars.css";
import "./style/global.css";
import "./style/repeat.css";
import "./style/reset.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Catalog from "./components/Catalog";
import Basket from "./components/Basket";
import { useState } from "react";
const sneakers = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 12999,
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Air Max 270",
    img: "img/sneakers2.png",
    price: 12999,
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers3.png",
    price: 8499,
  },
  {
    id: 4,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 12999,
  },
  {
    id: 5,
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers5.png",
    price: 15199,
  },
  {
    id: 6,
    title: "Мужские Кроссовки Nike Kyrie 7",
    img: "img/sneakers6.png",
    price: 11299,
  },
  {
    id: 7,
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    img: "img/sneakers7.png",
    price: 10799,
  },
  {
    id: 8,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    img: "img/sneakers8.png",
    price: 16499,
  },
  {
    id: 9,
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    img: "img/sneakers9.png",
    price: 13999,
  },
  {
    id: 10,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 8499,
  },
  {
    id: 11,
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 8999,
  },
  {
    id: 12,
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    img: "img/sneakers10.png",
    price: 11299,
  },
];
function App() {
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [basketData, setBasketData] = useState([]);

  const onClickIsShowBasket = () => {
    setIsShowBasket(!isShowBasket);
  };

  const addProduct = (product) => {
    const isProduct = basketData.find((item) => item.id === product.id);

    if (isProduct) {
      removeProduct(product.id);
    } else {
      setBasketData([...basketData, product]);
    }
  };
  const isSomeProduct = (id) => {
    return basketData.some((item) => item.id === id);
  };

  const removeProduct = (id) => {
    setBasketData(basketData.filter((item) => item.id !== id));
  };
  return (
    <>
      {isShowBasket && (
        <Basket
          isSomeProduct={isSomeProduct}
          products={basketData}
          removeProduct={removeProduct}
          onClickClose={onClickIsShowBasket}
        />
      )}
      <Header onClickBasketOpen={onClickIsShowBasket} />
      <main>
        <Slider />
        <Catalog
          products={sneakers}
          isSomeProduct={isSomeProduct}
          addProduct={addProduct}
        />
      </main>
    </>
  );
}

export default App;
