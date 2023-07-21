import { Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";

function DatePickerComponent(props: any) {
  const { name, label, required, description, disabled, onChange } = props;
  const [newDate, setNewDate] = useState<Date | null>(null);
  const labelData = label.visible ? label.value : "";
  //console.log(newData);
  return (
    <div>
      <Stack spacing={4} sx={{ width: 500 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={labelData}
            value={newDate}
            onChange={(newValue) => {
              onChange(name, newValue);
            }}
            slotProps={{
              textField: {
                helperText: description,
                required: required,
                disabled: disabled,
              },
            }}
          />
        </LocalizationProvider>
      </Stack>
    </div>
  );
}

export default DatePickerComponent;
