import React from "react"
import { Drawer, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { List } from "@mui/material"
// import { scroller } from "react-scroll/modules";


export const DrawerComponent=({setopenDrawer,openDrawer})=>{
    const data=["Home","About","Skills","Works","Contact"]
    // const  scrollToSection = (e) => {
    //     setopenDrawer(false)
    //     scroller.scrollTo(e, {
    //       duration: 600,
    //       delay: 0,
    //       smooth: "easeInOutQuart",
    //     });
    //   };


    const handleChange=(e)=>{
        // scrollToSection(e)
    }
    return(
        <React.Fragment>
            <Drawer sx={{width:360}} anchor="left" open={openDrawer}
            onClose={()=>{
                setopenDrawer(false)
            }}>
               {data.map((e,i)=>{
                   return ( <List key={i}>
                    <ListItemButton onClick={()=>{
                        handleChange(e)
                    }}>
                        <ListItemIcon>
                            <ListItemText sx={{color:"#2878d5"}}>
                                {e}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>)
               })}

            </Drawer>
        </React.Fragment>

    )
}