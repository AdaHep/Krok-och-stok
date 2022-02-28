import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import röttVin from "../images/röttvin.png";
import bubbel from "../images/bubbel.png";
import vittVin from "../images/vittvin.png";

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
        <Link style={LinkStyle} to="/productPageBeer">
          ÖL
        </Link>
      </div>
      <div style={productCardContainer}>
        <div style={productCard}>
          <p style={productHeadline}>Rött</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={röttVin} alt="" />
          </div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setWine1Count(wine1Count - 1)}
            >
              -
            </button>
            <p>{wine1Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setWine1Count(wine1Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Vitt</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={vittVin} alt="" />
          </div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setWine2Count(wine2Count - 1)}
            >
              -
            </button>
            <p>{wine2Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setWine2Count(wine2Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Bubbel</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={bubbel} alt="" />
          </div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setWine3Count(wine3Count - 1)}
            ></button>
            <p>{wine3Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setWine3Count(wine3Count + 1)}
            >
              +
            </button>
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
  display: "flex",
  boxSizing: "border-box",
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

const productButtons: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const picturePlaceholder: CSSProperties = {
  height: "8rem",
  width: "8rem",
};

const productImage: CSSProperties = {
  width: "8rem",
  height: "8rem",
  objectFit: "contain",
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

const addRemoveButton: CSSProperties = {
  width: "3rem",
  margin: "1rem",
  border: "none",
  borderRadius: "1rem",
};
