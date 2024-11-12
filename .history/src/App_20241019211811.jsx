import "@fontsource/inter/400.css"; //
import "@fontsource/inter/500.css"; //
import "@fontsource/inter/600.css"; //
import "@fontsource/inter/700.css"; //
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
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    img: "img/sneakers2.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers3.png",
    price: 8499,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 12999,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    img: "img/sneakers5.png",
    price: 15199,
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    img: "img/sneakers6.png",
    price: 11299,
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    img: "img/sneakers7.png",
    price: 10799,
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    img: "img/sneakers8.png",
    price: 16499,
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    img: "img/sneakers9.png",
    price: 13999,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    img: "img/sneakers1.png",
    price: 8499,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    img: "img/sneakers4.png",
    price: 8999,
  },
  {
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
    setBasketData([ product]);
    
  }
  return (
    <>
      {isShowBasket && (
        <Basket products={basketData} onClickClose={onClickIsShowBasket} />
      )}
      <Header onClickBasketOpen={onClickIsShowBasket} />
      <main>
        <Slider />
        <Catalog products={sneakers} />
      </main>
    </>
  );
}

export default App;
