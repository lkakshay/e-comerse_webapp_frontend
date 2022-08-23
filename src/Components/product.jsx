import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Stack,Rating,Box } from '@mui/material';


export const Product=()=>{
    return(
 
      <Card
        sx={{
          width: "100%",
          m: "5%",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          borderRadius: "0px",
        }}
      >
        <img
          style={{ width: "100%", height: "auto", aspectRatio: "4/3" }}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
        />
        <Stack spacing={1} sx={{ px: "7%", py: "3%" }}>
          <Typography sx={{fontSize:"16px",fontWeight:500}}>SAMSUNG 6.5 kg 5 Star Inverter with Diamond dd</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
            size="small"
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontWeight: "600" }} color="black">
              ₹ 256
            </Typography>
            <Typography
              sx={{
                fontWeight: "00",
                fontSize: "13px",
                textDecoration: "line-through",
                ml: "7%",
              }}
              color="black"
            >
              ₹400
            </Typography>
          </Box>
        </Stack>
        <CardActions  sx={{display:'flex',justifyContent:'space-evenly'}}>
          <Button  sx={{width:"50%",backgroundColor:"#00081c",fontSize:'10px',py:'5%',fontWeight:'600'}} size="small" variant='contained'>BUY NOW</Button>
          <Button sx={{width:"50%",backgroundColor:"#00081c",fontSize:'10px',py:'5%',fontWeight:'600'}} size="small" variant='contained'>ADD TO CART</Button>
        </CardActions>
      </Card>
  );
    
}