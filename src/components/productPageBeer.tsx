import { setUncaughtExceptionCaptureCallback } from "process";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import arboga from "../images/arboga.png";
import eybro from "../images/eybro.png";
import falcon from "../images/falcon.png";
import mariestad from "../images/mariestad.png";
import pistonhead from "../images/pistonhead.png";
import carlsberg from "../images/carlsberg.png";

function ProductPageBeer() {
  const [beer1Count, setBeer1Count] = useState(0);
  const [beer2Count, setBeer2Count] = useState(0);
  const [beer3Count, setBeer3Count] = useState(0);
  const [beer4Count, setBeer4Count] = useState(0);
  const [beer5Count, setBeer5Count] = useState(0);
  const [beer6Count, setBeer6Count] = useState(0);
  const [shoppingCart, setTotalBeerCount] = useState(0);

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
        <div style={productCard}>
          <p style={productHeadline}>Arboga 10.2%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={arboga} alt="" />
          </div>
          <p>Pris: 15 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer1Count(beer1Count - 1)}
            >
              -
            </button>
            <p>{beer1Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer1Count(beer1Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Ey Bro 5%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={eybro} alt="" />
          </div>
          <p>Pris: 10 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer2Count(beer2Count - 1)}
            >
              -
            </button>
            <p>{beer2Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer2Count(beer2Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Falcon 5.2%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={falcon} alt="" />
          </div>
          <p>Pris: 1 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer3Count(beer3Count - 1)}
            >
              -
            </button>
            <p>{beer3Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer3Count(beer3Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Mariestad 5.3%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={mariestad} alt="" />
          </div>
          <p> 8:- st</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer4Count(beer4Count - 1)}
            >
              -
            </button>
            <p>{beer4Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer4Count(beer4Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Pistonhead 4.9%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={pistonhead} alt="" />
          </div>
          <p>Pris: 22 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer5Count(beer5Count - 1)}
            >
              -
            </button>
            <p>{beer5Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer5Count(beer5Count + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Carlsberg 5%</p>
          <div style={picturePlaceholder}>
            <img style={productImage} src={carlsberg} alt="" />
          </div>
          <p>Pris: 11 kronor</p>
          <div style={productButtons}>
            <button
              style={addRemoveButton}
              onClick={() => setBeer6Count(beer6Count - 1)}
            >
              -
            </button>
            <p>{beer6Count}</p>
            <button
              style={addRemoveButton}
              onClick={() => setBeer6Count(beer6Count + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          setTotalBeerCount(
            shoppingCart + beer1Count + (shoppingCart + beer2Count)
          )
        }
      >
        Lägg till i kundkorg
      </button>
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
