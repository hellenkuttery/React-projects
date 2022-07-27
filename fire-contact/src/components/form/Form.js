import React from "react";
import {
  Grid,
  Stack,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material/";
import { AccountCircle } from "@mui/icons-material/";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';


const Form = ({info,setInfo,handleFormSubmit}) => {
    const handleChange=(e)=>{
   e.preventDefault();
        // console.log(e.target.value)
        // const name=e.target.name;
        // const value=e.target.value;
      const {name,value}=e.target 
   
    setInfo({...info,[name]:value})
    console.log(info)
     }
  return (
    <div>
      <Grid
        container
        spacing={2}
        textAlign="center"
        verticalAlign="middle"
        direction="column"
        style={{ width: "300" }}
      >
        <p className="contact-header">
          <div>
            <a
              href="https://github.com/clarusway"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{"<Clarusway/> "}</code>
            </a>
          </div>
          <span className="design header">design</span>
        </p>
        <h2 className="contact-header">Add Contact</h2>

        <Box  style={{ backgroundColor: "white", padding: "20px" }}>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"               
                variant="outlined"
                name="username"
                placeholder="Username"
                value={info.username}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="outlined"
                name="phoneNumber"
                placeholder="Phone Number"
               value={info.phoneNumber}
               onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneEnabledIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleChange}
               
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              </FormControl>
              <Button variant="contained" type="submit" value="Submit">
              ADD
            </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default Form;
