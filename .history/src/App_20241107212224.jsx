import "./style";
import { Suspense } from "react";
import { Header, Basket } from "./components";
import { Main, Favorite, Shop, NotFound } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages";

function App() {
  return (
    <Router>
      <>
        <Basket />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
