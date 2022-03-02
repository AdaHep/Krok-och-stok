import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Checkout(){
    return(
    <div>
        <div style={rootStyle}>
        <div style={header}>Checkout</div>

        <div style={inputFields}>

            
        </div>


        <div style={buttonBox}>
        <Link style={LinkStyle} to={"/Cart"}>
            <div> Go back </div>
        </Link>

        <Link style={LinkStyle} to={"/Purchase"}>
            <div>Complete Purchase</div>
        </Link>
        </div>
        </div>
    </div>
    );
}

const inputFields: CSSProperties = {
    display: "flex",
}

const buttonBox: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
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

export default Checkout;