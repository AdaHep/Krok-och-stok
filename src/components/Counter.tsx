import React from "react";
import { CSSProperties } from "react";

interface Props {
  alkoholLista: [{}];
}

// interface State {
//   // lättöl33cl: number;
//   //  folköl33cl: number;
//   //  folköl50cl: number;
//   //  starköl33cl: number;
//   //  starköl50cl: number;
//   //  glasvin12cl: number;
//   //  flaskavin75cl: number;
//   //  sprit4cl: number;
// }

class Counter extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      AlkoList: [{}],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.render();
  }

  handleInputChange(event: { target: any }) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // this.setState({
    //   AlkoList: {AlkoList..., Mängd: { name: value } },
    // });
    let alkoArray;

    alkoArray = { types: [{ öl50cl: value, öl33cl: value }] };
    console.log(alkoArray);
  }

  handleSubmit(event: { target: any }) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    // event.preventDefault();
  }

  public render() {
    return (
      <div style={containerStyle}>
        <h2>Ange dryckesmängd för att beräkna tid till nykterhet</h2>
        <div style={formContainerStyle}>
          <form>
            <label style={formStyle}>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Lättöl 2,8% 33cl</h3>
                <input
                  name="lättÖl33cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.setState(öl50cl: 10)
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Lättöl 2,8% 50cl</h3>
                <input
                  name="lättÖl50cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Folköl 3,5% 33cl</h3>
                <input
                  name="folkÖl33cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Folköl 3,5% 50cl</h3>
                <input
                  name="folkÖl50cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Starköl 5.5% 33cl</h3>
                <input
                  name="starkÖl33cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Starköl 5.5% 50cl</h3>
                <input
                  name="starköl50cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Ett glas vin 12cl</h3>
                <input
                  name="glasvin12cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
              <div style={optionContainer}>
                <h3 style={drinkLabelStyle}>Stark sprit 4cl </h3>
                <input
                  name="sprit4cl"
                  placeholder="Antal"
                  type="number"
                  onChange={this.handleInputChange}
                />
              </div>
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
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
  fontSize: "1.2rem",
  textAlign: "center",
};

const formContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  fontSize: "1rem",
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
