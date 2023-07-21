import React from "react";
import "./App.css";
import Form from "./Form";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" gutterBottom>
        A Sample Form
      </Typography>
      <Form />
      {/* <form>
        <input
          type="text"
          minLength={2}
          maxLength={15}
          pattern="[a-zA-Z]+"
          // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        />
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
