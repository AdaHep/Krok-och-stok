import React from "react";
import { CSSProperties } from "react";

interface Props {}
interface State {
  lättöl33cl: number;
  folköl33cl: number;
  folköl50cl: number;
  starköl33cl: number;
  starköl50cl: number;
  glasvin12cl: number;
  flaskavin75cl: number;
  sprit4cl: number;
}

class Counter extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lättöl33cl: "",
      folköl33cl: "",
      folköl50cl: "",
      starköl33cl: "",
      starköl50cl: "",
      glasvin12cl: "",
      flaskavin75cl: "",
      sprit4cl: "",
    };
    this.render();
  }

  public render() {
    return (
      <div style={containerStyle}>
        <h2>Ange dryckesmängd för att beräkna tid till nykterhet</h2>
        <div style={formContainerStyle}>
          <form>
            <label style={formStyle}>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Lättöl</h3>

                <select>
                  <option value="33clStarköl">33cl</option>
                  <option value="50clStarköl">50cl</option>
                </select>

                <input placeholder="Antal" type="number" />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}> Folköl </h3>
                <select>
                  <option value="33cl">33cl</option>
                  <option value="50cl">50cl</option>
                </select>

                <input placeholder="Antal" type="number" />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Starköl</h3>
                <select>
                  <option value="33cl">33cl</option>
                  <option value="50cl">50cl</option>
                </select>

                <input placeholder="Antal" type="number" />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Ett glas vin 12cl</h3>
                <input placeholder="Antal" type="number" />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Stark sprit 4cl </h3>
                <input placeholder="Antal" type="number" />
              </div>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Counter;

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "50rem",
  width: "50rem",
  backgroundColor: "#eae",
  borderRadius: "5rem",
  color: "black",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontSize: "1.8rem",
  textAlign: "center",
};

const formContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  fontSize: "1.8rem",
};

const drinkLabelStyle: CSSProperties = {
  margin: "0",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const optionContainer: CSSProperties = {};

const formTextStyle: CSSProperties = {};

const inputStyle: CSSProperties = {};

const submitButtonStyle: CSSProperties = {
  width: "15rem",
  display: "block",
  fontSize: "4rem",
  borderRadius: "15rem",
  border: "none",
};
