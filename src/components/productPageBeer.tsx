import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { mockedProductsBeer, Product, ShoppingCartItem } from "../data";

export function ProductPageBeer() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  function addToCart(product: Product) {
    const isItemInCart = shoppingCart.find(
      (item) => item.title === product.title
    );

    if (isItemInCart) {
      product.count += 1;
      console.log(shoppingCart);
    } else {
      product.count += 1;
      shoppingCart.push(product);
    }
  }

  function removeFromCart(product: Product) {
    product.count -= 1;
    shoppingCart.push();
    console.log(shoppingCart);
  }

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
        {mockedProductsBeer.map((p, index) => (
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
      <Link style={LinkStyle} to={"/Cart"}>
        <button onClick={() => moveProducts()}>Lägg till i kundkorg</button>
      </Link>
    </div>
  );
}

function moveProducts() {
  return null;
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
  width: "6rem",
  background: "blue",
  borderRadius: "8rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};
