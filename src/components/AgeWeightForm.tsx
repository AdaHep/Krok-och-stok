import { count } from "console";
import { NONAME } from "dns";
import { CSSProperties, useState } from "react";

function AgeWeightForm() {
  const [values, setValues] = useState({
    weight: "",
    isClicked: false,
  });

  const handleWeightInputChange = (event: { target: { value: any } }) => {
    setValues({
      ...values,
      weight: event.target.value,
    });
    console.log(values);
  };

  const HandleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setValues({
      ...values,
      isClicked: true,
    });
    alert(values.isClicked);
  };

  return (
    <div style={formStyle}>
      <form style={formStyle} onSubmit={HandleSubmit}>
        <input
          style={inputStyle}
          onChange={handleWeightInputChange}
          value={values.weight}
          type="number"
          placeholder="Vikt"
          name="weight"
        />
        <button style={submitButtonStyle} type="submit">
          Nästa
        </button>
      </form>
    </div>
  );
}

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "30rem",
  width: "30rem",
  backgroundColor: "#eae",
  borderRadius: "15rem",
};

const inputStyle: CSSProperties = {
  width: "15rem",
  fontSize: "4rem",
  textAlign: "center",
  border: "none",
  borderRadius: "15rem",
};

const submitButtonStyle: CSSProperties = {
  width: "15rem",
  display: "block",
  fontSize: "4rem",
  borderRadius: "15rem",
  border: "none",
};

export default AgeWeightForm;
