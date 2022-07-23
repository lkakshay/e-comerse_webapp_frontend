
import {Box,Typography} from "@mui/material"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';






export const Footer=()=>{


    

    return(
            
                
                    <Box  sx={{backgroundColor:"#00081c",p:1,my:1}}>
                         <Typography textAlign="center" sx={{fontSize:"18px" ,fontWeight:"900",px:1.5,py:1,color:"#ffffff",}}>
                         CONTACT US
                        </Typography>  
                    
                   
                    <Box sx={{display:"flex",justifyContent:"center",my:1,gap:"20px"}}>
                        <a href="https://www.linkedin.com/in/akshay-lk-a62080230/" target="_blank" rel="noreferrer noopener" >
                            <LinkedInIcon fontSize="large" sx={{color:"#ffffff"}}/>
                        </a>
                        <a href="https://github.com/lkakshay" target="_blank" rel="noreferrer noopener">
                            
                            <GitHubIcon fontSize="large" sx={{color:"#ffffff"}}/>
                        </a>
                        <a href="mailto:connectme.lkakshay@gmail.com" target="_blank" rel="noreferrer noopener" >
                            <MailOutlineRoundedIcon fontSize="large" sx={{color:"#ffffff"}}/>
                        </a>
                        <a href="tel:+916282676712" target="_blank" rel="noreferrer noopener">
                            <LocalPhoneRoundedIcon fontSize="large" sx={{color:"#ffffff"}}/>
                        </a>
                    </Box>
                    <Typography textAlign="center" sx={{fontSize:"14px" ,fontWeight:"900",px:1.5,py:1,color:"#ffffff",}}>
                    © 2021 E.coM All Rights Reserved.
                        </Typography>  

                </Box>


                
               
            
    )
}