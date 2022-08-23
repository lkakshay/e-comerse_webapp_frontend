import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export const Singleproduct = () => {
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
            my: 1,
            px: 1,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "300px",
            }}
          ></div>
        </Grid>
        <Grid container xs={12} md={12} sm={12} lg={6} sx={{ py: 1, px: 1 }}>
          <Box sx={{ width: "100%", p: "3%", bgcolor: "background.paper" }}>
            <Box>
              <Typography
                gutterBottom
                sx={{ fontSize: "22px", fontWeight: "900" }}
              >
                Toothbrush
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
                  ₹ 356
                </Typography>
                <Typography
                sx={{ fontSize: "16px", px: 1, py: 2 ,color:"green"}}>
                  20%
                  </Typography>
              </Box>

              
            </Box>
            <Box sx={{p:1}}>
            <Divider variant="middle" sx={{mb:2}} />
              <Typography gutterBottom color="text.secondary" variant="body2">
              Bank Offer10% off on SBI Credit Card, up to ₹1500. On orders of ₹5000 and aboveT&C
              </Typography>
              <Typography gutterBottom color="text.secondary" variant="body2">
              Bank Offer10% off on SBI Credit Card EMI Transactions, up to ₹2000. On orders of ₹5000 and aboveT&C
              </Typography>
              <Typography gutterBottom color="text.secondary" variant="body2">
              Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
              </Typography>
              <Typography gutterBottom color="text.secondary" variant="body2">
              No cost EMI ₹1,391/month. Standard EMI also available
              </Typography>

            <Divider variant="middle" sx={{mt:2}} />
            </Box>
            <Box sx={{ m: 2 }}>
              <Typography gutterBottom variant="body1">
                Select type
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Extra Soft" />
                <Chip color="primary" label="Soft" />
                <Chip label="Medium" />
                <Chip label="Hard" />
              </Stack>
            </Box>
            <Box sx={{ mt: 3, m: 1, mb: 1 }}>
              <Button>Add to cart</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
