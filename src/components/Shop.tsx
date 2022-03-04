import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgeCheck from "./ageCheck";
import Cart from "./Cart";
import ProductPageBeer from "./productPageBeer";
import ProductPageSpirits from "./productPageSpirits";
import ProductPageWine from "./productPageWine";
import Under18 from "./under18";
import Checkout from "./Checkout";
import Purchase from "./Purchase";
import { useState } from "react";
import { ShoppingCartItem } from "../data";
import Api from "./Api";


function Shop() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AgeCheck />}></Route>
        <Route
          path="productPageBeer"
          element={
            <ProductPageBeer
              shoppingCart={shoppingCart}
              onCartChanged={setShoppingCart}
            />
          }
        ></Route>

        <Route
          path="productPageSpirits"
          element={
            <ProductPageSpirits
              shoppingCart={shoppingCart}
              onCartChanged={setShoppingCart}
            />
          }
        ></Route>
        <Route
          path="productPageWine"
          element={
            <ProductPageWine
              shoppingCart={shoppingCart}
              onCartChanged={setShoppingCart}
            />
          }
        ></Route>
        <Route
          path="Cart"
          element={<Cart shoppingCart={shoppingCart} />}
        ></Route>
        <Route path="under18" element={<Under18 />}></Route>
        <Route path="Checkout" element={<Checkout />}></Route>
        <Route path="Purchase" element={<Purchase />}></Route>
        <Route path="Api" element={<Api />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Shop;
