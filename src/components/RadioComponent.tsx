import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const RadioComponent = (props: any) => {
  const {
    label,
    required,
    name,
    disabled,
    enums,
    enumNames,
    description,
    row,
    onChange,
  } = props;

  let options = [{ value: enums[0], label: enumNames[0] }];

  for (let i = 1; i < enums.length; i++) {
    let ob = { value: enums[i], label: enumNames[i] };
    options = [...options, ob];
  }

  return (
    <div className="Margin">
      <FormControl disabled={disabled} onChange={(e: any) => onChange(name, e)}>
        <FormLabel required={required}>
          {label.visible ? label.value : ""}
        </FormLabel>
        <RadioGroup row={row}>
          {options.map((option) => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio required={required} />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText>{description}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default RadioComponent;
