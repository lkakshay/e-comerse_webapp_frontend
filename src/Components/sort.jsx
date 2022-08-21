import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
    <Box sx={{ backgroundColor: "white", p: 1, pt: 3 }}>
      <ThemeProvider theme={theme}>
        <FormControl focused margin="normal" size="small" fullWidth>
          <InputLabel color="primary" id="demo-simple-select-label">
            SORT BY
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="SORT BY"
            onChange={handleChange}
          >
            <MenuItem  value={10}>Popularity</MenuItem>

            <MenuItem value={20}>Price Low to High</MenuItem>
            <MenuItem value={30}>Price High to Low</MenuItem>
            <MenuItem value={40}>Newest First</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
};
