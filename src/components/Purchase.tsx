import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Purchase(){
    return(
    <div>
        <div style={rootStyle}>
        <h1 style={header}>Checkout</h1>
        <h2>Thank you for your purchase!</h2>
        <Link style={LinkStyle} to="/ProductPageBeer">
        <div>Go to the home page</div></Link>

    </div>
    </div>
    );
}

const row: CSSProperties = {
    display: "flex",
    flexDirection: "row",
}

const column: CSSProperties = {
    display: "flex",
    flexDirection: "column",
}

const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "50rem",
    height: "50rem",
    backgroundColor: "#e6ffff",
    borderRadius: "5rem",
    color: "black",
    alignItems: "center",
    justifyContent: "space-evenly",
    fontSize: "1.2rem",
    textAlign: "center",
  };

const header: CSSProperties = {
    fontSize: "34px",
    color: "black",
};

const LinkStyle: CSSProperties = {
    display: "flex",
    textDecoration: "none",
    height: "3rem",
    width: "auto",
    background: "blue",
    borderRadius: "8rem",
    padding: "0.5rem",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  };

export default Purchase;