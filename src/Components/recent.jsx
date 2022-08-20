
import { Grid,Box } from "@mui/material"
import React from "react";
import Card from '@mui/material/Card';
import {Stack} from "@mui/material";
import {Rating} from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Recent=()=>{
    return(
      <React.Fragment>
              <Typography sx={{fontWeight:'bolder',px:'3%',py:'5px',pt:"20px",textAlign:"left"}} variant="h5" color="#00081c">
                RECENTLY VIEWED
              </Typography> 
        <Box sx={{ py:'20px',px:'3%',backgroundColor:"white"}}>
                      
          <Grid container spacing={{ xs: 2, md: 3,lg:5 }} sx={{backgroundColor:"white"}}>
          {Array.from(Array(5)).map((_, index) => (
            <Grid sx={{my:"10px"}} item xs={6} md={3} lg={12/5} key={index}>

              <Card sx={{ maxWidth:260 ,padding:"2%" ,boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",borderRadius:"0px"}}>
                  <img style={{width:'100%' ,height:"auto" ,aspectRatio:"4/3"}}
                      
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                  />
                  <Stack spacing={1} sx={{p:"2% 2%"}}>
                      <Typography variant="h6" >
                      Lizard
                      </Typography>
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly  size="small"/>
                      <Box sx={{display:'flex',alignItems:"center" }}>
                          <Typography sx={{fontWeight:'600'}} color="black">
                          ₹ 256
                          </Typography>
                          <Typography sx={{fontWeight:'00',fontSize:'13px',textDecoration:'line-through',ml:'7%'}} color="black">
                              ₹400
                          </Typography>
                      </Box>
                  </Stack>
                  <CardActions>
                    <Button size="small">BUY NOW</Button>
                    <Button size="small">ADD TO CART</Button>
                </CardActions>
                  </Card>
              
            </Grid>
          ))}
          </Grid>
        </Box>
      </React.Fragment>
                
            )
}