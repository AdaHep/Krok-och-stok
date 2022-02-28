import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

function ProductPageSprit() {
  const [sprit1Count, setSprit1Count] = useState(0);
  const [sprit2Count, setSprit2Count] = useState(0);
  const [sprit3Count, setSprit3Count] = useState(0);

  return (
    <div style={productContainer}>
      <h2>Sprit</h2>
      <div style={menuButtons}>
        <Link style={LinkStyle} to="/productPageBeer">
          ÖL
        </Link>
        <Link style={LinkStyle} to="/productPageWine">
          VIN
        </Link>
      </div>
      <div style={productCardContainer}>
        <div style={productCard}>
          <p style={productHeadline}>Absolut Vodka 40%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setSprit1Count(sprit1Count - 1)}>-</button>
            <p>{sprit1Count}</p>
            <button onClick={() => setSprit1Count(sprit1Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Jelzin BiB 40%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setSprit2Count(sprit2Count - 1)}>-</button>
            <p>{sprit2Count}</p>
            <button onClick={() => setSprit2Count(sprit2Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Jäger 70cl 40%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setSprit3Count(sprit3Count - 1)}>-</button>
            <p>{sprit3Count}</p>
            <button onClick={() => setSprit3Count(sprit3Count + 1)}>+</button>
          </div>
        </div>
      </div>

      <button>Lägg till i kundkorg</button>
    </div>
  );
}

export default ProductPageSprit;

const productContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "50rem",
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

const productCard: CSSProperties = {};

const productButtons: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const picturePlaceholder: CSSProperties = {
  backgroundColor: "black",
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
