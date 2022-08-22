import React from "react";
import { Product } from "../Components/product";
import { Grid } from "@mui/material";

import { Sort } from "../Components/sort";
import { Filter } from "../Components/filter";
let a = Array(12).fill(`1`);

export const Products = () => {
  return (
    <React.Fragment>
      <Grid container sx={{ backgroundColor: "#ebf0f0" }}>
        <Grid item xs={12} sm={12} md={12} lg={2.5} sx={{ my: 1, px: 1 }}>
          <Sort />
          <Filter  />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          lg={9.5}
          sx={{ backgroundColor: "white", my: 1 }}
        >
          <Grid container >
          {a.map((el,i) => (
            <Grid
              item

              key={i}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Product id={i} />
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
