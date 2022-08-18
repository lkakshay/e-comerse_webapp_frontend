import React from "react"
import { Product } from "../Components/product"
import { Grid } from "@mui/material"
let a=Array(30).fill(`1`)
console.log(a)

export const Products=()=>{
    return(
        <React.Fragment>

            <Grid container spacing={2}>
                <Grid item xs={0} md={0} lg={3} sx={{border:"1px solid black}"}}>
                   <div>lk</div>
                </Grid>
                <Grid container xs={12} md={12} lg={9} sx={{border:"1px solid black}"}}>
                { a.map((el)=>(
               <Grid item xs={6} md={4} lg={3}>
                 <Product/>
               </Grid>
            ))}
                </Grid>
                
            </Grid>
           
        </React.Fragment>
    )
}