import React from "react";
import { Product } from "../Components/product";
import { Grid } from "@mui/material";
import { getProductData } from "../Redux/reducers/productReducer";
import Pagination from "@mui/material/Pagination";
import { Sort } from "../Components/sort";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const disapatch = useDispatch();

  const productData = useSelector((state) => state.productReducer);
  const [params, setParams] = useState({ page: 1 });

  useEffect(() => {
    let temp = {};
    searchParams.forEach((value, key) => {
      if (key !== "page") {
        temp = { ...temp, [key]: value };
      }
    });
    setParams(temp);
  }, [searchParams]);
  useEffect(() => {
    disapatch(
      getProductData({
        page: searchParams.get("page"),
        sort: searchParams.get("sort"),
        order: searchParams.get("order"),
        category: searchParams.get("category"),
      })
    );
  }, [searchParams]);

  return (
    <React.Fragment>
      <Grid container sx={{ backgroundColor: "#ebf0f0" }}>
        <Grid item xs={12} sm={12} md={12} lg={2.5} sx={{ my: 1, px: 1 }}>
          <Sort />
          
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sm={12}
          lg={9.5}
          sx={{ backgroundColor: "white", my: 1 }}
        >
          <Grid container>
            {productData.data?.map((el, i) => (
              <Grid
                item
                key={el._id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Product data={el} id={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          color="primary"
          sx={{ my: 4 }}
          page={+searchParams.get("page")}
          count={productData.totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => {
            const newParms = { ...params, page: page };
            console.log(newParms);
            setSearchParams({ ...searchParams, ...newParms });
          }}
        />
      </div>
    </React.Fragment>
  );
};
