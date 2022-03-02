import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Checkout(){
    return(
    <div>
        <div style={rootStyle}>
        <div style={header}>Checkout</div>

        <div style={inputFields}>

        <div style={column}>


        <div style={formStyle}>
            <form>
                <h2 style={formTextStyle}>Email Adress</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="Email Adress"
                name="Email Adress"
                />
            </form>
            <form>
                <h2 style={formTextStyle}>First name</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="First name"
                name="First name"
                />
            </form>
            <form>
                <h2 style={formTextStyle}>Last name</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="Last name"
                name="Last name"
                />
            </form>
        </div>

        </div>


        <div style={column}>

        <div style={formStyle}>
        <form>
                <h2 style={formTextStyle}>Street and House number</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="Street and House number"
                name="Street and House number"
                />
            </form>
            <form>
                <h2 style={formTextStyle}>Apartment/Suite</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="Apartment/Suite"
                name="Apartment/Suite"
                />
            </form>
            <form>
                <h2 style={formTextStyle}>Postalcode</h2>
                <input
                style={inputStyle}
                type="number"
                placeholder="Postalcode"
                name="Postalcode"
                />
            </form>
            <form>
                <h2 style={formTextStyle}>City/Town</h2>
                <input
                style={inputStyle}
                type="text"
                placeholder="City/Town"
                name="City/Town"
                />
            </form>
        </div>
        </div>
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

const row: CSSProperties = {
    display: "flex",
    flexDirection: "row",
}

const column: CSSProperties = {
    display: "flex",
    flexDirection: "column",
}

const inputStyle: CSSProperties = {
    width: "15rem",
    fontSize: "1rem",
    textAlign: "center",
    color: "black",
    border: "none",
    borderRadius: "15rem",
  };
  

const formTextStyle: CSSProperties = {
    color: "black",
    fontSize: "1.5rem",
    textAlign: "center",
    margin: 0,
    padding: 0,
  };

const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "auto",
    width: "auto",
    borderRadius: "1rem",
  };

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