import React from "react"
import { Box, Grid } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


export const DropdownSm=()=>{


    return(
    <React.Fragment>
        <Grid container  sx={{backgroundColor:"#ffffff",m:0,height:"40px",border:"none"}}>
            <Grid item  sm={3} xs >
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <ShoppingCartOutlinedIcon fontSize="large"  sx={{color:"#00081c"}}/>
                </Box>
            </Grid>
            <Grid item  sm={3} xs >
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <FavoriteBorderOutlinedIcon fontSize="large"  sx={{color:"#00081c"}}/>
                </Box>
            </Grid>
            <Grid item  sm={3} xs >
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <SearchOutlinedIcon fontSize="large"  sx={{color:"#00081c"}}/>
                </Box>
            </Grid>
            <Grid item  sm={3} xs >
                <Box sx={{display:'flex',justifyContent:'center'}}>
                <MenuOutlinedIcon fontSize="large"  sx={{color:"#00081c"}}/>
                </Box>
            </Grid>

        </Grid>
           
    </React.Fragment>
    )
}


 