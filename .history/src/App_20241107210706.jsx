import "./style";
import {  Suspense } from "react";
import { Header, Basket } from "./components";
import { Main, Favorite, Shop } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          </Routes>
        </Suspense>
      </>
    </Router>
  );
}

export default App;
