import React from "react";

interface Props {}
interface State {
  antalFisar: number;
}

class Test extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      antalFisar: "3",
    };
  }

  render() {
    return (
      <div>
        <h1>Hej alla fisar!</h1>
      </div>
    );
  }
}
console.log();

export default Test;
