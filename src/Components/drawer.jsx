import React ,{useState,useEffect}from "react"
import { Drawer, ListItemButton, ListItemIcon, ListItemText,Typography ,Box} from "@mui/material"
import { List } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const heading =[
    {name:"MEN",display:"none",border:"none",subs:["Mens Clothing","Watches","Mens Sports","Footwear"]},
    {name:"WOMEN",display:"none",border:"none",subs:["Women Clothing","Watches","Mens Sports","Footwear"]},
    {name:"KIDS",display:"none",border:"none",subs:["Boys Clothing ","Girls Clothing","Footwear","Toys","Accessories"]},
    {name:"ELECTRONICS",display:"none",border:"none",subs:["Mobile","Laptop","Smartwatches","Tablet","Earphones"]},
    {name:"SPORTS",display:"none",border:"none",subs:["Sports shoes","Sportswear","Sports Gear","Supplements"]},
    {name:"BEAUTY",display:"none",border:"none",subs:["Skin Care","Hair Care","Womens Hygiene","Oral Care"]},
    {name:"APPLIANCES",display:"none",border:"none",subs:["For Bedroom","For Living Room","For Kitchen"]},

   ]



export const DrawerComponent=({setopenDrawer,openDrawer})=>{

    
    
    
   
    const [subcat,setSubcat]=useState([])
    const [status,setstatus]=useState(false)
    const [cat,setcat]=useState("")
 

    const viewSub=(e)=>{
        
     setSubcat(e.subs)
     setstatus(true)
     setcat(e.name)      
    }
    return(
        <React.Fragment>
            <Drawer  anchor="bottom" open={openDrawer}
            onClose={()=>{
                setopenDrawer(false)
            }}>

                    <Box sx={{display :"flex",backgroundColor:"#00081c",justifyContent:"space-between"}}>
                        <Typography sx={{fontSize:"20px" ,fontWeight:"900",px:1.5,py:1,color:"#ffffff",}}>
                        CATEGORIES
                        </Typography>  
                         <CloseIcon  sx={{color:"#ffffff",mr:3,p:1}} onClick={()=>setopenDrawer(false)} />
                       
                   
                    </Box>
  
                        {status? <Box sx={{p:1,display :"flex",}}>
                        
                        <ArrowBackIcon  sx={{color:"#00081c"}} onClick={()=>setstatus(false)}/>
                        <Typography sx={{fontSize:"20px" ,fontWeight:"900",px:3,color:"#00081c",}}>
                       {cat}
                       </Typography> 
                       </Box>:<></>}
                   
                    
                    

                    {!status?
                    <Box>
                        {heading?.map((e,i)=>{
                   return ( <List key={i}>
                    <ListItemButton onClick={()=>viewSub(e)}>
                        <ListItemIcon>
                            <ListItemText sx={{color:"#00081c"}}>
                                {e.name}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>)
               })}
                    </Box>:
                    <Box>
                        {subcat?.map((e,i)=>{
                   return ( <List key={i}>
                    <ListItemButton onClick={()=>{
                      
                    }}>
                        <ListItemIcon>
                            <ListItemText sx={{color:"#00081c"}}>
                                {e}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>)
               })}</Box>}

            </Drawer>
        </React.Fragment>

    )
}