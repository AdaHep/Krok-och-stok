import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";

function AgeCheck() {
  return (
    <div style={rootStyle}>
      <div style={ageCheckStyle}>
        <h1>Hur gammal är du?</h1>
        <div className="rounded-lg bg-slate-500"></div>
        <div style={ageButtonsContainer}>
          <Link className=".bg-teal-600	" to={"./productpagebeer"}>
            <h2>Över 18+</h2>
          </Link>
          <Link style={linkStyle} to={"./under18"}>
            <h2>Under 18+</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
};

const buttons: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
const ageCheckStyle: CSSProperties = {
  width: "50rem",
  height: "100%",
  background: "white",
  color: "green",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

const ageButtonsContainer: CSSProperties = {
  flexDirection: "row",
};

const linkStyle: CSSProperties = {
  textDecoration: "none",
  padding: "1rem",
  display: "block",
  color: "darkgreen",
};

export default AgeCheck;
