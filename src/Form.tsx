import React, { useState } from "react";
// import ButtonComponent from "./components/ButtonComponent";
// import TextComponent from "./components/TextComponent";
// import NumberComponent from "./components/NumberComponent";
import { Box } from "@mui/material";
// import RadioComponent from "./components/RadioComponent";
// import DropdownComponent from "./components/DropdownComponent";
// import CheckboxComponent from "./components/CheckboxComponent";
// import DatePickerComponent from "./components/DatePickerComponent";
import demoForm from "./jsonFiles/demoForm.json";
import mappings from "./utils/mapping";

function Form() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    language: [],
    dateOfBirth: {},
    agreed: [],
  });
  const [error, seterror] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
    gender: false,
    address: false,
    city: false,
    state: false,
    language: false,
    dateOfBirth: false,
    agreed: false,
  });

  const changeHandler = (name: string, event: any) => {
    //console.log(event);
    let updatedData: any = { ...data };

    updatedData[name] = event.target.value;
    setData(updatedData);
    if (
      event.target.validity !== undefined &&
      (event.target.validity.patternMismatch ||
        event.target.validity.tooLong ||
        event.target.validity.tooShort ||
        event.target.validity.valueMissing)
    ) {
      let updateError: any = { ...error };
      updateError[name] = true;
      seterror(updateError);
    } else {
      let updateError: any = { ...error };
      updateError[name] = false;
      seterror(updateError);
    }
  };

  const changeHandlerDate = (name: string, newValue: any) => {
    let updatedData: any = { ...data };

    updatedData[name] = newValue;
    setData(updatedData);
  };

  const changeHandlerCheck = (name: string, arr: string[], e: any) => {
    let updatedData: any = { ...data };
    let array = arr.filter((a) => a !== "");

    if (e.target.checked) {
      updatedData[name] = [...array, e.target.value];
      setData(updatedData);
    } else {
      array = array.filter((a) => a !== e.target.value);
      updatedData[name] = [...array];
      setData(updatedData);
    }
  };

  //console.log(data);
  const onChange = {
    checkbox: changeHandlerCheck,
    datePicker: changeHandlerDate,
    dropdown: changeHandler,
    "number-input": changeHandler,
    radio: changeHandler,
    "text-input": changeHandler,
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (data["language"].length === 0) {
      let updateError: any = { ...error };
      updateError["language"] = true;
      seterror(updateError);
      window.history.back();
    } else {
      let updateError: any = { ...error };
      updateError["language"] = false;
      seterror(updateError);
      console.log(data);
    }
  };

  const items: any = demoForm["items"];
  //console.log(items);
  const mapping: any = mappings;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      autoComplete="off"
      onSubmit={(e: any) => submitHandler(e)}
    >
      {items.map((item: any) => {
        const Component = mapping[item.fieldType];
        if (!Component) return null;
        return (
          <Component
            key={item.name}
            {...item}
            // name={item.name}
            // label={item.label}
            // required={item.required}
            // errorText={item.errorText}
            // description={item.description}
            // pattern={item.pattern}
            // maxLength={item.maxLength}
            // minLength={item.minLength}
            // enums={item.enums}
            // enumNames={item.enumNames}
            // row={item.row}
            // placeholder={item.placeholder}
            // type={item.type}
            //@ts-ignore
            value={data[item.name]}
            // @ts-ignore
            error={error[item.name]}
            // @ts-ignore
            onChange={onChange[item.fieldType]}
          />
        );
      })}
    </Box>
  );
}

export default Form;
