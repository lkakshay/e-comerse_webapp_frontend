
import { Grid,Box } from "@mui/material"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {Stack} from "@mui/material";
import React from "react";

export const Topten=()=>{
    return(
        <React.Fragment>
             <Typography sx={{fontWeight:'bolder',px:'3%',py:'5px',textAlign:"left"}} variant="h5" color="#00081c">
                TOP 10 OF THE WEEK
            </Typography> 
        <Box sx={{ py:'40px',px:'3%',backgroundColor:"#eaeded"}}>
                      
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(10)).map((_, index) => (
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
                </Card>
            
          </Grid>
        ))}
      </Grid>
    </Box>
    </React.Fragment>
        
    )
}