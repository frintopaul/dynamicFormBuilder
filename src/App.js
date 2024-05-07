import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

function App() {
  const [activeFormcontrol, setActiveformControl] = React.useState("");
  const [formData, setFormData] = React.useState({
    type: "",
    value: "",
    placeholder: "",
  });

  const handleChange = (event) => {
    setActiveformControl(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h3 className="mainHead">Form builder app</h3>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="whiteBox">
            <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your form control type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={activeFormcontrol}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>Select the type</em>
                </MenuItem>
                <MenuItem value={"input"}>Input Box</MenuItem>
                <MenuItem value={"text area"}>Text Area</MenuItem>
                <MenuItem value={"radio button"}>Radio Button</MenuItem>
              </Select>
            </FormControl>
            <h3>Enter {activeFormcontrol} field details</h3>
            <Grid container spacing={2}>
              <Grid item lg={6}>
              <TextField id="outlined-basic" label={"Enter "+activeFormcontrol+" label"} variant="outlined" className="input_full" />
              </Grid>
              <Grid item lg={6}>
              <TextField id="outlined-basic" label={"Enter "+activeFormcontrol+" placeholder"} variant="outlined" className="input_full" />
              </Grid>
            </Grid>
          </div>

          <div className="anfc_buttonWrap">
            <button className="anfc_button">Add new form control</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
