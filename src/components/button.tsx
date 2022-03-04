import React from "react";
import Button from "@material-tailwind/react/Button";

export default function AgeButton() {
  return (
    <Button
      color="lightBlue"
      buttonType="link"
      size="regular"
      rounded={false}
      block={false}
      iconOnly={false}
      ripple="dark"
    >
      Regular Button
    </Button>
  );
}
