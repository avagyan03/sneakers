import "./style";
import { lazy, Suspense } from "react";
import { Header, Basket } from "./components";


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
