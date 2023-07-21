import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

function CheckboxComponent(props: any) {
  const {
    label,
    required,
    name,
    disabled,
    enums,
    enumNames,
    description,
    row,
    error,
    onChange,
  } = props;
  // const [newData, setNewData] = useState({ [name]: [""] });
  // const [error, seterror] = useState(false);
  // const [obj, setObj] = useState({});
  // // const [checkedState, setCheckedState] = useState(
  // //   new Array(enums.length).fill(false)
  // // );

  // const blurHandler = (obj: any) => {
  //   let arr: any[] = [];
  //   let len = 0;
  //   let lenFalse = 0;
  //   for (const o in obj) {
  //     len++;
  //     if (obj[o] === false) lenFalse++;
  //     else {
  //       arr = [...arr, o];
  //       //console.log(o);
  //     }
  //   }
  //   if (len === lenFalse) {
  //     error=true;
  //     //console.log("true value");
  //   } else {
  //     //console.log(arr);

  //     seterror(false);
  //     //console.log("false value");
  //   }
  //   console.log(arr);
  //   setNewData({ [name]: arr });
  //   console.log(newData);
  // };

  // const changeHandler = (e: any, name: string, obj: any) => {
  //   //console.log(e.target.value, e.target.checked);
  //   setObj({ ...obj, [e.target.value]: e.target.checked });
  // };

  let options = [{ value: enums[0], label: enumNames[0] }];

  for (let i = 1; i < enums.length; i++) {
    let ob = { value: enums[i], label: enumNames[i] };
    options = [...options, ob];
  }

  const [arr, setarr] = useState([""]);
  const changeHandler = (e: any) => {
    let update: string[] = [...arr];
    if (e.target.checked) update = [...update, e.target.value];
    else {
      update = update.filter((name) => name !== e.target.value);
    }
    setarr(update);
    //console.log("in child");
  };

  //console.log(arr);

  return (
    <div className="Margin">
      <FormControl
        variant="standard"
        required={label.visible && required}
        disabled={disabled}
      >
        <FormLabel error={error ? true : false}>
          {label.visible ? label.value : ""}
        </FormLabel>
        <FormGroup row={row} onChange={(e: any) => changeHandler(e)}>
          {options.map((option, index) => {
            return (
              <FormControlLabel
                required={!label.visible && required}
                value={option.value}
                name={option.value}
                key={index}
                control={<Checkbox name={option.value} />}
                label={option.label}
                // onChange={(e: any) => onChange(name, enums, e)}
                // onChange={(e: any) => changeHandler(e)}
                onChange={(e: any) => onChange(name, arr, e)}
              />
            );
          })}
        </FormGroup>
        <FormHelperText error={error ? true : false}>
          {description}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default CheckboxComponent;
