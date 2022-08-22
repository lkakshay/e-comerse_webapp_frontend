import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
let a = [1, 2, 3, 4];

export const Filter=()=> {


  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "white", p: 1, mt: 1 }}>
      <Typography sx={{fontSize:'14px',fontWeight:'bold' ,mb:1}}>
        FILTERS
      </Typography>
      <Accordion  fullWidth sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{borderBottom:"2px solid #00081c"}}
        >
          <Typography 
          sx={{fontSize:'14px'}}
          >Filter By</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {a?.map(()=>(
            <FormControl fullWidth variant='standard' margin="normal" size="small" fullWidth>
            <InputLabel color="primary" id="demo-simple-select-label">
              Subcatagory
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="SORT BY"
              onChange={handleChange1}
            >
              <MenuItem  value={10}>Popularity</MenuItem>
              <MenuItem value={20}>Price Low to High</MenuItem>
              <MenuItem value={30}>Price High to Low</MenuItem>
              <MenuItem value={40}>Newest First</MenuItem>
            </Select>
          </FormControl>
          ))}
          
          
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
}
