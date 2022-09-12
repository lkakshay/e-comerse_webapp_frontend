import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Recent } from "../Components/recent";

import API from "../api/config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openLoginPopUP } from "../Redux/reducers/authReducer";

export const Singleproduct = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const dispatch=useDispatch()
  const {userData,authStatus}=useSelector((state)=>state.authReducer)
 

  useEffect(() => {
    API.get("products/single", { params: { id } })
      .then((res) => {
        setData(res.data);
        console.log("res.data", res.data);
      })

      .catch((e) => {
        console.log("e", e);
      });
  }, [id]);

  const handleCart =(productId)=>{
    

    if(!authStatus)
    dispatch(openLoginPopUP())

  
    API.post('cart/add',{
      user_id:userData.userId,
      product_id:productId,
      count:1,
      status:false
    })
    .then((res)=>{
// console.log('res',res);
    })

    .catch((e)=>{
      console.log('e',e);
    })
  }

  return (
    <React.Fragment>
      <Grid container sx={{ backgroundColor: "#ebf0f0", px: 1 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{
            my: 2,
            px: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                px: "25%",
                py: "5%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: 1,
                }}
                src={data.image ? data.image[0] : ""}
              />
            </Box>

            <Grid container sx={{ p: 1 }}>
              {data.image?.map((el, i) => {
                if (i > 3) return;
                return (
                  <Grid item xs={3} sx={{ p: 1 }} key={i}>
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: 1,
                      }}
                      src={el}
                      alt="product image"
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={6} sx={{ py: 2, px: 1 }}>
          <Box sx={{ p: "3%", bgcolor: "background.paper" }}>
            <Box sx={{ px: 2, py: 1 }}>
              <Typography gutterBottom variant="h4">
                {data.name}
              </Typography>

              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                size="medium"
              />
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ fontSize: "26px", fontWeight: "900", px: 1, py: 2 }}
                >
                  ₹ {data.discount}
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", px: 1, py: 2, color: "green" }}
                >
                  {Math.floor(
                    ((data.price - data.discount) / data.price) * 100
                  )}
                  %
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: "00",
                  fontSize: "16px",
                  textDecoration: "line-through",
                  pl: 1,
                }}
                color="black"
              >
                {data.price}
              </Typography>
            </Box>
            <Box sx={{ p: 1 }}>
              <Divider variant="middle" sx={{ mb: 2 }} />

              <div style={{ display: "flex" }}>
                <LocalOfferIcon
                  fontSize="small"
                  sx={{ color: "#00d039", px: 1 }}
                />
                <Typography gutterBottom color="text.secondary" variant="body2">
                  Bank Offer10% off on SBI Credit Card, up to ₹1500. On orders
                  of ₹5000 and aboveT&C
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <LocalOfferIcon
                  fontSize="small"
                  sx={{ color: "#00d039", px: 1 }}
                />
                <Typography gutterBottom color="text.secondary" variant="body2">
                  Bank Offer10% off on SBI Credit Card EMI Transactions, up to
                  ₹2000. On orders of ₹5000 and aboveT&C
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <LocalOfferIcon
                  fontSize="small"
                  sx={{ color: "#00d039", px: 1 }}
                />
                <Typography gutterBottom color="text.secondary" variant="body2">
                  Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <LocalOfferIcon
                  fontSize="small"
                  sx={{ color: "#00d039", px: 1 }}
                />
                <Typography gutterBottom color="text.secondary" variant="body2">
                  No cost EMI ₹1,391/month. Standard EMI also available
                </Typography>
              </div>

              <Divider variant="middle" sx={{ mt: 2 }} />
            </Box>
            <Box sx={{ m: 2 }}>
              {data.isPrime ? <Typography>prime</Typography> : <></>}
            </Box>
            <Box sx={{ mt: 3, m: 1, mb: 1 }}>
              <Button
                sx={{ mx: 1, py: 1, backgroundColor: "#00081c" }}
                variant="contained"
              >
                {" "}
                Buy Now
              </Button>
              <Button
                sx={{ my: 2, py: 1, backgroundColor: "#00081c" }}
                variant="contained"

                onClick={()=>handleCart(data._id)}
              >
                Add to cart
              </Button>
            </Box>
            <Box>
              <Typography
                sx={{ px: 2 }}
                gutterBottom
                color="text.secondary"
                variant="body2"
              >
                {data.description}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Recent />
    </React.Fragment>
  );
};
