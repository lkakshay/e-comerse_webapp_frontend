import  React, { useState,useEffect } from "react";
import { useSelector } from 'react-redux';

import { DropdownLg } from "./dropdownLg";
import { DropdownSm } from "./dropdownSm";

import { AppBar,Toolbar,Typography} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';



 import { DrawerComponent } from "./drawer";
import { Box } from "@mui/system";



export const Navbar=()=>{
    const screenSize=useSelector((state)=>state.MediaqueryReducer.screenSize)
    const [dimension,setdimension]=useState({status:false,heading:"20px"})
    const [openDrawer,setopenDrawer]=useState(false)

    useEffect(()=>{
        if(screenSize==="lg")
        setdimension({...dimension,status:false})
        else if(screenSize==="sm")
        setdimension({...dimension,status:true})
        else if(screenSize==="sx")
        setdimension({...dimension,status:true,heading:"16px"})
    
      },[screenSize])
    
    

    return(
            <React.Fragment>
                <AppBar sx={{backgroundColor:"#00081c",boxShadow:'none',}} position='sticky' >
                <Toolbar>
                     {dimension.status?<></>:<MenuSharpIcon onClick={()=>setopenDrawer(true)}  fontSize="large"/>}
                     {dimension.status?<></>:  <Typography sx={{fontSize:"30px" ,fontWeight:"900",ml:1}}>
                        E.CoM
                    </Typography> }
                    
                     
                   

                   
                            <Typography  sx={{fontSize:dimension.heading ,fontWeight:"900",textAlign:"right",width:"100%",mr:1,fontFamily:" DWFutura,sans-serif"}}> 
                    E C O M E R C E 
                    </Typography> 
                    <Typography  sx={{fontSize:dimension.heading ,fontWeight:"900",textAlign:"left",width:"100%",ml:1,fontFamily:" DWFutura,sans-serif"}}> 
                    W E B A P P
                    </Typography> 
                       
                    
                    {
                        dimension.status?<></>:<React.Fragment>
                            <Box sx={{ml:"auto",display:"flex",gap:"20px",mr:1}}>
                        {dimension.status?<></>:<SearchIcon fontSize="large"/>}
                        <FavoriteIcon  fontSize="large"/>
                        <ShoppingCartIcon fontSize="large"/>
                    </Box>
                        </React.Fragment>
                    }
                    
                    
                    

                </Toolbar>
                {openDrawer?<DrawerComponent setopenDrawer={setopenDrawer} openDrawer={openDrawer}/>:<></>}
                {dimension.status?<DropdownSm/>:<DropdownLg/>  }
                
            </AppBar>

           
            </React.Fragment>

    )
}