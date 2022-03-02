import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { mockedProductsBeer, ShoppingCartItem } from "../data";
import BeerCount from "./BeerCount";

function Cart() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItem[]>([]);
  return (
    <div style={productContainer}>
      <h2>Kundvagn</h2>

      {mockedProductsBeer.length === 0 ? <p>No items in cart.</p> : null}

      <div style={productCardContainer}>
        {mockedProductsBeer.map((p) => (
          <div style={productCard}>
            <div style={picturePlaceholder}>
              <p style={productHeadline}>{p.title}</p>
              <img style={productImage} src={p.image} alt="" />
              <p style={productCartPrice}>{p.price}:- st</p>
            </div>
            <div style={priceAndCount}>
              <p style={productCartCount}>
                Antal:
                {mockedProductsBeer.find((item) => item.title === p.title)
                  ?.count || 0}
              </p>
              <p style={productCartCount}>Totalt {p.count * p.price}:-</p>
            </div>
            <div style={productButtons}></div>
          </div>
        ))}
      </div>
      <h3>Totalt 514:- </h3>
      <Link style={LinkStyle} to={"/Checkout"}>
      <button style={payButton}>Betala</button>
      </Link>
    </div>
  );
}

export default Cart;

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
  fontSize: ".8rem",
  fontWeight: "bold",
};

const productCardContainer: CSSProperties = {
  display: "grid",
  boxSizing: "border-box",
  flexDirection: "column",
  gridTemplateColumns: "repeat(1, 1fr)",
};

const productCard: CSSProperties = {
  borderBottom: "1px solid black",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const productImage: CSSProperties = {
  width: "8rem",
  height: "3rem",
  objectFit: "contain",
};

const productButtons: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const priceAndCount: CSSProperties = {};

const productCartPrice: CSSProperties = {
  fontSize: ".8rem",
  margin: 0,
};

const productCartCount: CSSProperties = {
  fontSize: ".8rem",
  margin: 0,
};

const picturePlaceholder: CSSProperties = {
  width: "8rem",
};

const payButton: CSSProperties = {
  marginBottom: "1rem ",
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

