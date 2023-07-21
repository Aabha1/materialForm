import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = (props: any) => {
  const { label, disabled, type } = props;
  return (
    <div className="submit">
      <Button variant="outlined" disabled={disabled} type={type}>
        {label.visible ? label.value : ""}
      </Button>
    </div>
  );
};

export default ButtonComponent;
