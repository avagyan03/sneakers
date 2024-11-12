import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./style/vars.css";
import "./style/global.css";
import "./style/repeat.css";
import "./style/reset.css";
import Header from "./components/Header";
import Basket from "./components/Basket";
import { useState, useEffect, createContext } from "react";
import { Main } from "./pages/Main";
import { Favorite } from "./pages/Favorite";
import { Shop } from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSWRConfig } from "swr";

function App() {
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState([]);
  const { mutate } = useSWRConfig();

  console.log("useState");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));


    fetch("http://localhost:3000/shop")
      .then((res) => res.json())
      .then((data) => setShop(data.map((obj) => Object.values(obj))));
  }, []);

  const onClickIsShowBasket = () => {
    setIsShowBasket(!isShowBasket);
  };


  const addShop = (product) => {
    
    fetch("http://localhost:3000/shop", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });


      product.forEach((obj) => {
        mutate(
          "http://localhost:3000/basket",
        fetch(`http://localhost:3000/basket/${obj.id}`, {
          method: "DELETE",
        }),
          {
            populateCache: false,
          };
      })
    );

    setShop([...shop, product]);
  };

 

  const shopProductsLength = shop.length;

  return (
    <Router>
      <>
        {isShowBasket && (
          <Basket
            addShop={addShop}
            onClickClose={onClickIsShowBasket}
            shopProductsLength={shopProductsLength}
          />
        )}
        <Header onClickBasketOpen={onClickIsShowBasket} />
        <Routes>
          <Route path="/" element={<Main products={products} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/shop" element={<Shop products={shop} />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
