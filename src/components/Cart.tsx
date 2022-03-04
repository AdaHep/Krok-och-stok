import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartItem } from "../data";

interface Props {
  shoppingCart: ShoppingCartItem[];
}

function Cart({ shoppingCart }: Props) {
  const [discount, setDiscount] = useState(false);
  const totalPrice = shoppingCart.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.count,
    0
  );

  function iWantDiscount() {
    if (!discount) {
      setDiscount(true);
    } else {
      setDiscount(false);
    }
  }
  return (
    <div className="block mx-auto bg-gray-600 rounded-lg">
      <h2 className="text-center" >Kundvagn</h2>

      {shoppingCart.length === 0 ? <p>Du har ju glömt att handla!</p> : null}

      <div className="grid gap-1 grid-cols-2 md:grid md:gap-3 md:grid-cols-3" >
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
              <p > Totalt {p.count * p.price}:-</p>
            </div>
            <div style={productButtons}></div>
          </div>
        ))}
      </div>
      <h3 className="text-center" >Totalt {totalPrice} :- </h3>
      <div className="flex">
        <Link className="mx-auto" style={LinkStyle} to={"/productpagebeer"}>
          Tillbaka
        </Link>
        <Link  className="mx-auto" style={LinkStyle} to={"/Checkout"}>
          Betala
        </Link>
      </div>
      <div className="text-center">
        {discount && <p>Ingen rabatt kompis!</p>}
        {!discount && (
          <button
            style={discountButtonStyle}
            onClick={iWantDiscount}
            id="NodiscountBtn"
          >
            {" "}
            Vill du ha rabatt?
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;

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
  margin: "2rem",
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
  display:"flex",
  textDecoration: "none",
  height: "3rem",
  width: "5rem",
  background: "lightblue",
  borderRadius: "8rem",
  padding: "0.5rem",
  color: "white",
  textAlign:"center"
};

const discountButtonStyle: CSSProperties = {
  color: "lightgreen",
  marginBottom: "1rem",
};

// const NoDiscountText: CSSProperties = {
//   display: "none",
// };
