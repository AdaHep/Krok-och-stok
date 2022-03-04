import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";

function AgeCheck() {
  return (
    <div style={rootStyle}>
      <div  className="bg-gray-600 text-5xl " style={ageCheckStyle}>
        <h1 >Hur gammal är du?</h1>
        <div className="rounded-lg bg-slate-500"></div>
        <div style={ageButtonsContainer}>
          <Link className=".bg-teal-600 text-4xl		" to={"./productpagebeer"}>
            <h2>Över 18+</h2>
          </Link>
          <Link className=".bg-teal-600 text-4xl		" style={linkStyle} to={"./under18"}>
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
  fontWeight: "bold",
  

};
const ageCheckStyle: CSSProperties = {
  width: "50rem",
  height: "100%",
  color: "white",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "2rem",
  fontWeight: "bold",
};

const ageButtonsContainer: CSSProperties = {
  flexDirection: "row",
  paddingTop: "2rem",

};

const linkStyle: CSSProperties = {
  textDecoration: "none",
  paddingTop: "2rem",
  display: "block",
  color: "white",
  fontWeight: "bold",
  

};

export default AgeCheck;
