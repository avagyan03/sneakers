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
import { useState, useEffect } from "react";
import { Main } from "./pages/Main";
import { Favorite } from "./pages/Favorite";
import { Shop } from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isShowBasket, setIsShowBasket] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const onClickIsShowBasket = () => {
    setIsShowBasket(!isShowBasket);
  };

  return (
    <Router>
      <>
        {isShowBasket && <Basket onClickClose={onClickIsShowBasket} />}
        <Header onClickBasketOpen={onClickIsShowBasket} />
        <Routes>
          <Route path="/" element={<Main products={products} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
