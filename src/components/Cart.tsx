import { CSSProperties } from "react";
import { mockedProductsBeer, mockedProductsWine, mockedProductsSpirits } from "../data";
import { ProductPageBeer } from "./productPageBeer"
function Cart() {
  return (
    <div style={cartContainer}>
      <h2>Kundkorg</h2>
      <div style={cartItems}>
        {shoppingCartItem}.map((p, cartIndex) => (
          <div key={cartIndex} style={cartProductCard}>
            <p style={cartProductHeadline}>{p.title}</p>
            <div style={cartPicture}>
              <img style={cartItemImage} src={p.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;

const cartContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  height: "20rem",
  width: "20rem",
  background: "blue",
  position: "absolute",
  top: "20rem",
  right: 20,
};

const cartItems: CSSProperties = {
  width: "100%",
  height: "10rem",
  background: "black",
};
