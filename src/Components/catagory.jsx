
import { Grid,Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export const Category=()=>{
    return(
      <Box sx={{ py:'10px',mt:"30px"}}>
              <Typography sx={{fontWeight:'bolder',px:'3%',py:'5px',textAlign:"left"}} variant="h5" color="#00081c">
                SHOP BY CATEGORY
            </Typography> 
            
      <Grid container spacing={{ xs: 2, md: 3,lg:5 }} sx={{py:'30px'}}>
        {Array.from(Array(7)).map((_, index) => (
          <Grid item xs={3} md={12/7} lg={12/7} key={index} sx={{display:'flex',flexDirection:"column",alignItems:"center"}} >
            <Avatar sx={{width:"60px",height:'60px',}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <Typography sx={{fontWeight:'bolder'}} color="#00081c">
                    price
            </Typography>
                
            
          </Grid>
        ))}
      </Grid>
    </Box>
        
    )
}