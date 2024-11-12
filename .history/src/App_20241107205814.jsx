import "./style";
import { lazy, Suspense } from "react";
import { Header, Basket } from "./components";
const Main = lazy(() => import("./pages/Main"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Shop = lazy(() => import("./pages/Shop"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Basket />
        <Header />
       <Suspense>
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
