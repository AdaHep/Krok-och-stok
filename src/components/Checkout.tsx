import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div >
      <div className="bg-gray-600" style={rootStyle}>
        <div style={header}>Checkout</div>

        <div>
          <div style={column}>
            <div style={formStyle}>
              <form>
                <h2 style={formTextStyle}>Email</h2>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="seanpaul@dale.com"
                  name="Email Adress"
                />
              </form>
              <form>
                <h2 style={formTextStyle}>Förnamn</h2>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Sean"
                  name="First name"
                />
              </form>
              <form>
                <h2 style={formTextStyle}>Efternamn</h2>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Paul"
                  name="Last name"
                />
              </form>
            </div>
          </div>

          <div style={column}>
            <div style={formStyle}>
              <form>
                <h2 style={formTextStyle}>Adress</h2>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Hotel Motel Dalé "
                  name="Street and House number"
                />
              </form>
              <form>
                <h2 style={formTextStyle}>Postkod</h2>
                <input
                  style={inputStyle}
                  type="number"
                  placeholder="420"
                  name="Postalcode"
                />
              </form>
              <form>
                <h2 style={formTextStyle}>Stad</h2>
                <input
                  style={inputStyle}
                  type="text"
                  placeholder="Miami"
                  name="City/Town"
                />
              </form>
            </div>
          </div>
        </div>

        <div style={buttonBox}>
          <Link style={LinkStyle} to={"/Cart"}>
            <div> Tillbaka </div>
          </Link>

          <Link style={LinkStyle} to={"/Purchase"}>
            <div>Slutför köp</div>
          </Link>
        </div>
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

const inputStyle: CSSProperties = {
  width: "15rem",
  fontSize: "1rem",
  textAlign: "center",
  color: "black",
  border: "none",
  borderRadius: "15rem",
};

const formTextStyle: CSSProperties = {
  color: "lightgray",
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
};

const buttonBox: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "50%",
};

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  width: "60vw",
  height: "50rem",

  borderRadius: "5rem",
  color: "black",
  alignItems: "center",

  fontSize: "1.2rem",
  textAlign: "center",
};

const header: CSSProperties = {
  fontSize: "34px",
  color: "white",
};

const LinkStyle: CSSProperties = {
  display: "flex",
  textDecoration: "none",
  height: "3rem",
  width: "auto",
  background: "lightblue",
  borderRadius: "8rem",
  padding: "0.5rem",
  color: "white",
  justifyContent: "center",
  alignItems: "center",
};

export default Checkout;
