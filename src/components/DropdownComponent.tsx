import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const DropdownComponent = (props: any) => {
  const {
    label,
    required,
    name,
    disabled,
    enums,
    description,
    error,
    onChange,
    value,
  } = props;

  return (
    <div>
      <FormControl
        variant="outlined"
        required={required}
        disabled={disabled}
      >
        <InputLabel error={error ? true : false}>
          {label.visible ? label.value : ""}
        </InputLabel>
        <Select
          name={name}
          onChange={(e: any) => onChange(name, e)}
          value={value}
          label={name}
          error={error ? true : false}
          fullWidth
        >
          {enums.map((value: any) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error={error ? true : false}>
          {description}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default DropdownComponent;
