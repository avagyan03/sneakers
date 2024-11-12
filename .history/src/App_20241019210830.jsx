import "@fontsource/inter/400.css"; //
import "@fontsource/inter/500.css"; //
import "@fontsource/inter/600.css"; //
import "@fontsource/inter/700.css"; //
import "./style/vars.css";
import "./style/global.css";
import "./style/repeat.css";
import "./style/reset.css";
import  Header  from "./components/Header";
import Slider from "./components/Slider";
import Catalog from "./components/Catalog";
import Basket from "./components/Basket";
import { useState } from "react";

function App() {
  const [isShowBasket, setIsShowBasket] = useState(false);
const onClickIsShowBasket = () => {
  setIsShowBasket(!isShowBasket);
}
  return (
    <>
      {isShowBasket && <Basket onClickClose={onClickIsShowBasket} />}
      <Header  onClickBasketOpen={onClickIsShowBasket}/>
      <main>
        <Slider />
        <Catalog />
      </main>
    </>
  );
}

export default App;
