import { TextField } from "@mui/material";
import React from "react";

const TextComponent = (props: any) => {
  const {
    label,
    description,
    required,
    placeholder,
    errorText,
    name,
    disabled,
    minLength,
    maxLength,
    pattern,
    error,
    value,
    onChange,
  } = props;

  return (
    <div>
      <TextField
        name={name}
        label={label.visible ? label.value : ""}
        variant="outlined"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        helperText={error ? errorText : description}
        error={error ? true : false}
        onChange={(e: any) => onChange(name, e)}
        inputProps={{
          pattern: pattern,
          minLength: minLength,
          maxLength: maxLength,
        }}
      />
    </div>
  );
};

export default TextComponent;
