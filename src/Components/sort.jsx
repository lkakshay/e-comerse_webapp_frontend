import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Sort = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00081c",
      },
    },
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "white", p: 1 }}>
      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
        SORT
      </Typography>
      <ThemeProvider theme={theme}>
        <FormControl
         sx={{borderBottom:"1px solid #00081c"}} variant="standard" margin="normal" size="small" fullWidth>
          <InputLabel color="primary" id="demo-simple-select-label">
            Sort By
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="SORT BY"
            onChange={handleChange}
          >
            <MenuItem value={10}>Popularity</MenuItem>

            <MenuItem value={20}>Price Low to High</MenuItem>
            <MenuItem value={30}>Price High to Low</MenuItem>
            <MenuItem value={40}>Newest First</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
};
