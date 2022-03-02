import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeCheck from "./ageCheck";
import Cart from "./Cart";
import ProductPageBeer from "./productPageBeer";
import ProductPageSpirits from "./productPageSpirits";
import ProductPageWine from "./productPageWine";
import Under18 from "./under18";

function Shop() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgeCheck />}></Route>
        <Route path="productPageBeer" element={<ProductPageBeer />}></Route>
        <Route
          path="productPageSpirits"
          element={<ProductPageSpirits />}
        ></Route>
        <Route path="productPageWine" element={<ProductPageWine />}></Route>
        <Route path="Cart" element={<Cart />}></Route>
        <Route path="under18" element={<Under18 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Shop;
