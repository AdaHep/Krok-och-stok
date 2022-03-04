import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { mockedProductsSpirits, Product, ShoppingCartItem } from "../data";
import Errorbounds from "./Errorbounds";

interface Props {
  shoppingCart: ShoppingCartItem[];
  onCartChanged: (cart: ShoppingCartItem[]) => void;
}

function ProductPageBeer({ shoppingCart, onCartChanged }: Props) {
  function addToCart(product: Product) {
    const itemInCartIndex = shoppingCart.findIndex(
      (item) => item.title === product.title
    );

    if (itemInCartIndex !== -1) {
      const cartProduct = shoppingCart[itemInCartIndex];
      const updatedProduct = { ...product, count: cartProduct.count + 1 };
      const copyCart = [...shoppingCart];
      copyCart.splice(itemInCartIndex, 1, updatedProduct);
      onCartChanged(copyCart);
    } else {
      const updatedProduct = { ...product, count: 1 };
      onCartChanged([...shoppingCart, updatedProduct]);
    }
  }

  function removeFromCart(product: Product) {
    const itemInCartIndex = shoppingCart.findIndex(
      (item) => item.title === product.title
    );

    if (itemInCartIndex !== -1) {
      const cartProduct = shoppingCart[itemInCartIndex];
      const updatedProduct = { ...product, count: cartProduct.count - 1 };
      const copyCart = [...shoppingCart];
      copyCart.splice(itemInCartIndex, 1, updatedProduct);
      onCartChanged(copyCart);
    }
  }

  console.log(shoppingCart);
  const combinedProductList = mockedProductsSpirits.map((product) => {
    const productInCart = shoppingCart.find(
      (item) => item.title === product.title
    );
    if (productInCart) return productInCart;
    return { ...product, count: 0 };
  });

  return (
    <div style={productContainer}>
      <h2>SPRIT</h2>
      <div style={menuButtons}>
        <Link style={LinkStyle} to="/productPageBeer">
          ÖL
        </Link>
        <Link style={LinkStyle} to="/productPageWine">
          VIN
        </Link>
      </div>
      <Errorbounds>
      <div style={productCardContainer}>
        {combinedProductList.map((p, index) => (
          <div key={index} style={productCard}>
            <p style={productHeadline}>{p.title}</p>
            <div style={picturePlaceholder}>
              <img style={productImage} src={p.image} alt="" />
            </div>
            <p>Pris: {p.price}:- st</p>
            <div style={productButtons}>
              <button style={addRemoveButton} onClick={() => removeFromCart(p)}>
                -
              </button>
              <p>{p.count}</p>

              <button style={addRemoveButton} onClick={() => addToCart(p)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      </Errorbounds>
      <Link style={LinkStyle} to={"/Cart"}>
        Lägg till i kundkorg
      </Link>
    </div>
  );
}

export default ProductPageBeer;

const productContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "50rem",
  backgroundColor: "#e6ffff",
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
  width: "10rem",
  background: "blue",
  borderRadius: "8rem",
  padding: "0.5rem",
  margin: "1rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};
