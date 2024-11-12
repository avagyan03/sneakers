import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./style/vars.css";
import "./style/global.css";
import "./style/repeat.css";
import "./style/reset.css";
import { Header, Basket } from "./components";
import { Main } from "./pages/Main";
import { Favorite } from "./pages/Favorite";
import { Shop } from "./pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Basket />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
