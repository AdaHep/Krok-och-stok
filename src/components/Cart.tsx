import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartItem } from "../data";

interface Props {
  shoppingCart: ShoppingCartItem[];
}

function Cart({ shoppingCart }: Props) {
  const totalPrice = shoppingCart.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.count,
    0
  );
  return (
    <div style={productContainer}>
      <h2>Kundvagn</h2>

      {shoppingCart.length === 0 ? <p>No items in cart.</p> : null}

      <div style={productCardContainer}>
        {shoppingCart.map((p, index) => (
          <div key={index} style={productCard}>
            <div style={picturePlaceholder}>
              <p style={productHeadline}>{p.title}</p>
              <img style={productImage} src={p.image} alt="" />
              <p style={productCartPrice}>{p.price}:- st</p>
            </div>
            <div style={priceAndCount}>
              <p style={productCartCount}>
                Antal:
                {shoppingCart.find((item) => item.title === p.title)?.count ||
                  0}
              </p>
              <p style={productCartCount}>Totalt {p.count * p.price}:-</p>
            </div>
            <div style={productButtons}></div>
          </div>
        ))}
      </div>
      <h3>Totalt {totalPrice} :- </h3>
      <div style={bottomLinks}>
        <Link style={LinkStyle} to={"/productpagebeer"}>
          Tillbaka
        </Link>
        <Link style={LinkStyle} to={"/Checkout"}>
          Betala
        </Link>
      </div>
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
  gridTemplateColumns: "repeat(3, 1fr)",
};

const productCard: CSSProperties = {
  margin: "1rem",
  border: "1px solid black",
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

const bottomLinks: CSSProperties = {
  display: "flex",
};
const LinkStyle: CSSProperties = {
  display: "flex",
  textDecoration: "none",
  height: "3rem",
  width: "auto",
  background: "blue",
  borderRadius: "8rem",
  padding: "0.5rem",
  margin: "1rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};
