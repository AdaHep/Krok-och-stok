import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

function ProductPageWine() {
  const [wine1Count, setWine1Count] = useState(0);
  const [wine2Count, setWine2Count] = useState(0);
  const [wine3Count, setWine3Count] = useState(0);

  return (
    <div style={productContainer}>
      <h2>Vin</h2>
      <div style={menuButtons}>
        <Link style={LinkStyle} to="/productPageSprit">
          SPRIT
        </Link>
        <Link style={LinkStyle} to="/productPageWine">
          VIN
        </Link>
      </div>
      <div style={productCardContainer}>
        <div style={productCard}>
          <p style={productHeadline}>Rött</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setWine1Count(wine1Count - 1)}>-</button>
            <p>{wine1Count}</p>
            <button onClick={() => setWine1Count(wine1Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Vitt</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setWine2Count(wine2Count - 1)}>-</button>
            <p>{wine2Count}</p>
            <button onClick={() => setWine2Count(wine2Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Bubbel</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setWine3Count(wine3Count - 1)}>-</button>
            <p>{wine3Count}</p>
            <button onClick={() => setWine3Count(wine3Count + 1)}>+</button>
          </div>
        </div>
      </div>

      <button>Lägg till i kundkorg</button>
    </div>
  );
}

export default ProductPageWine;

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

const productCard: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

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
  textDecoration: "none",
  display: "flex",
  height: "3rem",
  width: "6rem",
  background: "blue",
  borderRadius: "8rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};
