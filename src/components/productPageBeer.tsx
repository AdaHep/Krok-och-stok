import { setUncaughtExceptionCaptureCallback } from "process";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { mockedProducts, Product, ShoppingCartItem } from "../data";


function ProductPageBeer() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);

  /////// Gör en ifsats som kollar om vi har en produkt i korgen, om det finns (öka count). Annars ska den lägga till.
  function addToCart(product: Product) {
    
/*     const shoppingCart = prev.find((item) => item.title === p.title);

    if (shoppingCart) {
      return prev.map(item =>
        item.id === p.title
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }

    return [...shoppingCart, { ...p, amount: 1 }]; */
  }

  function removeFromCart(product: Product) {}
  return (
    <div style={productContainer}>
      <h2>ÖL</h2>
      <div style={menuButtons}>
        <Link style={LinkStyle} to="/productPageSprit">
          SPRIT
        </Link>
        <Link style={LinkStyle} to="/productPageWine">
          VIN
        </Link>
      </div>

      <div style={productCardContainer}>
        {mockedProducts.map((p) => (
          <div style={productCard}>
            <p style={productHeadline}>{p.title}</p>
            <div style={picturePlaceholder}>
              <img style={productImage} src={p.image} alt="" />
            </div>
            <p>Pris: {p.price}:- st</p>
            <div style={productButtons}>
              <button
                style={addRemoveButton}
                onClick={() => addToCart(p)}
              ></button>
              <p>
                {shoppingCart.find((item) => item.title === p.title)?.count ||
                  0}
              </p>
              <button style={addRemoveButton} onClick={() => removeFromCart(p)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link style={LinkStyle} to="/Cart">
      <button>
        Lägg till i kundkorg
      </button>
      </Link>
    </div>
  );
}

export default ProductPageBeer;

const productContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "50rem",
  backgroundColor: "#eae",
  borderRadius: "5rem",
  color: "black",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontSize: "1.2rem",
  textAlign: "center",
};

const productHeadline: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const productCardContainer: CSSProperties = {
  display: "grid",
  boxSizing: "border-box",
  flexDirection: "row",
  gridTemplateColumns: "repeat(3, 1fr)",
};

const menuButtons: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "15rem",
};

const productCard: CSSProperties = {
  border: "1px solid black",
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const productImage: CSSProperties = {
  width: "8rem",
  height: "8rem",
  objectFit: "contain",
};

const productButtons: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const addRemoveButton: CSSProperties = {
  width: "3rem",
  margin: "1rem",
  border: "none",
  borderRadius: "1rem",
};

const picturePlaceholder: CSSProperties = {
  height: "8rem",
  width: "8rem",
};
const LinkStyle: CSSProperties = {
  display: "flex",
  textDecoration: "none",
  height: "3rem",
  width: "6rem",
  background: "blue",
  borderRadius: "8rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};
