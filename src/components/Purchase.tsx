import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Purchase() {
  return (
    <div>
      <div className="bg-gray-600" style={rootStyle}>
        <h1 style={header}>Checkout</h1>
        <h2 className="text-5xl">Tack för ditt köp!</h2>
        <Link style={LinkStyle} to="/ProductPageBeer">
          <div>Go to the home page</div>
        </Link>
      </div>
    </div>
  );
}

const row: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const column: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60vw",
  height: "50vw",
  borderRadius: "5rem",
  color: "white",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontSize: "1.2rem",
  textAlign: "center",
};

const header: CSSProperties = {
  fontSize: "34px",
  
};

const LinkStyle: CSSProperties = {
  display: "flex",
  textDecoration: "none",
  height: "6vh",
  width: "auto",
  background: "lightblue",
  borderRadius: "8rem",
  padding: "0.5rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};

export default Purchase;
