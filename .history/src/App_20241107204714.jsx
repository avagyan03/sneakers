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
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path="/favorite"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Favorite />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Shop />
              </Suspense>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
