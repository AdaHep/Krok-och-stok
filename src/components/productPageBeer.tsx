import { CSSProperties, useState } from "react";

function ProductPageBeer() {
  const [beer1Count, setBeer1Count] = useState(0);
  const [beer2Count, setBeer2Count] = useState(0);
  const [beer3Count, setBeer3Count] = useState(0);
  const [beer4Count, setBeer4Count] = useState(0);
  const [beer5Count, setBeer5Count] = useState(0);
  const [beer6Count, setBeer6Count] = useState(0);

  return (
    <div style={productContainer}>
      <h2>Välj berusninsgmedel</h2>
      <div style={productCardContainer}>
        <div style={productCard}>
          <p style={productHeadline}>Arboga 10.2%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer1Count(beer1Count - 1)}>-</button>
            <p>{beer1Count}</p>
            <button onClick={() => setBeer1Count(beer1Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Ey Bro 7.5%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer2Count(beer2Count - 1)}>-</button>
            <p>{beer2Count}</p>
            <button onClick={() => setBeer2Count(beer2Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Falcon 5.3%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer3Count(beer3Count - 1)}>-</button>
            <p>{beer3Count}</p>
            <button onClick={() => setBeer3Count(beer3Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Mariestad 5.2%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer4Count(beer4Count - 1)}>-</button>
            <p>{beer4Count}</p>
            <button onClick={() => setBeer4Count(beer4Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Pistonhead 5.2%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer5Count(beer5Count - 1)}>-</button>
            <p>{beer5Count}</p>
            <button onClick={() => setBeer5Count(beer5Count + 1)}>+</button>
          </div>
        </div>
        <div style={productCard}>
          <p style={productHeadline}>Carlsberg 4.3%</p>
          <div style={picturePlaceholder}>Picture Placeholder</div>
          <p>Pris: 20 kronor</p>
          <div style={productButtons}>
            <button onClick={() => setBeer6Count(beer6Count - 1)}>-</button>
            <p>{beer5Count}</p>
            <button onClick={() => setBeer6Count(beer6Count + 1)}>+</button>
          </div>
        </div>
      </div>
      <button>Lägg till i kundkorg</button>
    </div>
  );
}

export default ProductPageBeer;

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
