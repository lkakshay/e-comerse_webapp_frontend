import React, { useState } from "react"
import { Box, Grid, List, ListItem,  Typography } from "@mui/material"


const data=["MOBILE","FASHION","ELECTRONICS","HOME","SPORTS","BEAUTY","TOYS & BABY"]


export const DropdownLg=()=>{

   const [heading ,setHeading]=useState([
    {name:"Clothing",display:"none",border:"none",subs:["Mens Clothing","Watches","Mens Sports","Footwear"]},
    {name:"Footwear",display:"none",border:"none",subs:["Women Clothing","Watches","Mens Sports","Footwear"]},
    {name:"KIDS",display:"none",border:"none",subs:["Boys Clothing ","Girls Clothing","Footwear","Toys","Accessories"]},
    {name:"Electronics",display:"none",border:"none",subs:["Mobile","Laptop","Smartwatches","Tablet","Earphones"]},
    {name:"SPORTS",display:"none",border:"none",subs:["Sports shoes","Sportswear","Sports Gear","Supplements"]},
    {name:"BEAUTY",display:"none",border:"none",subs:["Skin Care","Hair Care","Womens Hygiene","Oral Care"]},
    {name:"APPLIANCES",display:"none",border:"none",subs:["For Bedroom","For Living Room","For Kitchen"]},

   ])

   const handleEvent=(i,x)=>{
    if(x){
        let temp=[...heading]
        temp[i].display="grid"
        temp[i].border="2px solid black"
        setHeading(temp)
   }

   else{
    let temp=[...heading]
        temp[i].display="none"
        temp[i].border="none"
        setHeading(temp)
   }
    
   }

   const changebackground=(e,x)=>{
        if(x)
        e.target.style.background='#e2f8f8'
        else
        e.target.style.background='#ffffff'

   }

    return(
    <React.Fragment>
        <Grid container  sx={{backgroundColor:"#ffffff",my:0,height:"40px",px:12,border:"none"}}>
            {heading?.map((e,i)=>(
            <Grid  key={i} item md lg={12/7 } 
             onMouseEnter={() =>handleEvent(i,true)} 
             onMouseLeave={() =>handleEvent(i,false)} 
            
               >
                    <Box sx={{color:"black",textAlign:"center",pt:.5,pb:0} }  >  
                    <Typography  variant="overline" align='center'  sx={{fontSize:'14px',borderBottom:e.border,pb:1}} >
                    {e?.name} 
                    </Typography>
               
                   { e.display==="grid"? <List on sx={{display:e.display,mt:0, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                        {e.subs?.map((sub,i)=>(
                             <ListItem key={i} alignItems="center" 
                             
                              sx={{background:'#ffffff'}}>
                              <Typography  variant="overline" align='center'
                               onMouseEnter={(e)=>changebackground(e,true)}
                              onMouseLeave={(e)=>changebackground(e,false)} >
                              {sub} 
                             </Typography>
                             </ListItem>
                        ))}
               
                    </List>:<></>}
                </Box>
            </Grid>
            ))}
            
        </Grid>
           
    </React.Fragment>
    )
}


 