import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const data = [
  { sort: "rating", order: -1 },
  { sort: "discount", order: 1 },
  { sort: "discount", order: -1 },
];

export const Sort = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00081c",
      },
    },
  });
  const [params, setParams] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [age, setAge] = React.useState("");

  useEffect(() => {
    let temp = {};
    searchParams.forEach((value, key) => {
      if (key !== "page") {
        temp = { ...temp, [key]: value };
      }
    });
    setParams(temp);
  }, [searchParams]);
  console.log(params);
  const handleChange = (event) => {
    const newParms = { ...params, ...data[event.target.value] };

    setSearchParams({ ...searchParams, ...newParms });

    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "white", p: 1 }}>
      <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
        SORT
      </Typography>
      <ThemeProvider theme={theme}>
        <FormControl
          sx={{ borderBottom: "1px solid #00081c" }}
          variant="standard"
          margin="normal"
          size="small"
          fullWidth
        >
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
            <MenuItem value={0}>Popularity</MenuItem>
            <MenuItem value={1}>Price Low to High</MenuItem>
            <MenuItem value={2}>Price High to Low</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
};
