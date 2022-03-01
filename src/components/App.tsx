import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeCheck from "./ageCheck";
import ProductPageBeer from "./productPageBeer";
import ProductPageSprit from "./productPageSprit";
import ProductPageWine from "./productPageWine";
import Under18 from "./under18";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgeCheck />}></Route>
        <Route path="productPageBeer" element={<ProductPageBeer />}></Route>
        <Route path="productPageSprit" element={<ProductPageSprit />}></Route>
        <Route path="productPageWine" element={<ProductPageWine />}></Route>
        <Route path="under18" element={<Under18 />}></Route>
        <Route path="Cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
