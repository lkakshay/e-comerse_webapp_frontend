
import { Grid,Box } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Trending=()=>{
    return(
        <Box sx={{ m:'15px'}}>
            
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    price
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">BUY NOW</Button>
                    <Button size="small">ADD TO CART</Button>
                </CardActions>
                </Card>
            
          </Grid>
        ))}
      </Grid>
    </Box>
        
    )
}