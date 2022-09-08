import React ,{useState,useEffect}from "react"
import { Drawer, ListItemButton, ListItemIcon, ListItemText,Typography ,Box} from "@mui/material"
import { List } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const heading =[
    {
      name: "Clothing",
      display: "none",
      border: "none",
      subs: [
        { name: "For Men", path: "Clothing >> Men's Clothing" },
        { name: "For Women ", path: "Clothing >> Women's Clothing" },
        { name: "For Kids", path: "Clothing >> Kids' Clothing" },
      ],
    },
    {
      name: "Footwear",
      display: "none",
      border: "none",
      subs: [
        { name: "Kids Footwear", path: "Footwear >> Kids' & Infant Footwear" },
        { name: " Men's Footwear", path: "Footwear >> Men's Footwear" },
        { name: "Women`s Footwear", path: "Footwear >> Women's Footwear" },
      ],
    },
    {
      name: "Baby Care",
      display: "none",
      border: "none",
      subs: [
        { name: "Kids Gifts", path: "Baby Care >> Baby & Kids Gifts" },
        { name: "Bath & Skin", path: "Baby Care >> Baby Bath & Skin" },
        { name: "Baby Bedding", path: "Baby Care >> Baby Bedding" },
        { name: "Infant Wear", path: "Baby Care >> Infant Wear" },
      ],
    },
    {
      name: "Personal Care",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Bath and Spa",
          path: "Beauty and Personal Care >> Bath and Spa",
        },
        {
          name: "Skin Care",
          path: "Beauty and Personal Care >> Body and Skin Care",
        },
        {
          name: "Combos and Kits",
          path: "Beauty and Personal Care >> Combos and Kits",
        },
        { name: "Hair Care", path: "Beauty and Personal Care >> Hair Care" },
        { name: "Makeup", path: "Beauty and Personal Care >> Makeup" },
        { name: "Fragrances", path: "Beauty and Personal Care >> Fragrances" },
      ],
    },
    {
      name: "Jewellery",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Rings",
          path: "Jewellery >> Rings",
        },
        {
          name: "Jewellery Sets",
          path: "Jewellery >> Jewellery Sets",
        },
        { name: "Earrings", path: "Jewellery >> Earrings" },
        { name: "Accessories", path: "Jewellery >> Accessories" },
      ],
    },
    {
      name: "Home Furnishing",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Bed Linen",
          path: "Home Furnishing >> Bed Linen",
        },
        {
          name: "Curtains & Accessories",
          path: "Home Furnishing >> Curtains & Accessories",
        },
        {
          name: "Living Room Furnishing ",
          path: "Home Furnishing >> Living Room Furnishing",
        },
        {
          name: "Floor Coverings",
          path: "Home Furnishing >> Floor Coverings",
        },
        {
          name: "Living",
          path: "Home Furnishing >> Living",
        },
      ],
    },
  ]



export const DrawerComponent=({setopenDrawer,openDrawer})=>{

    
    const navigate=useNavigate()
    
   
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
                            <ListItemText sx={{color:"#00081c"}}
                            onClick={() => {
                                navigate(`/products?category=${e.path}`)
                                setopenDrawer(false)
                              }}>
                                {e.name}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>)
               })}</Box>}

            </Drawer>
        </React.Fragment>

    )
}