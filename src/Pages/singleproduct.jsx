import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

let data = new Array(3).fill(0);
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
                src="https://m.media-amazon.com/images/I/41k73fSAoZL._UL1440_.jpg"
                alt=""
              />
            </Box>

            <Grid container sx={{p:1}}>
              {data?.map((el, i) => (
                <Grid item xs={4} sx={{p:1}}>
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: 1,
                    }}
                    src="https://m.media-amazon.com/images/I/41k73fSAoZL._UL1440_.jpg"
                    alt=""
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid container xs={12} md={12} sm={12} lg={6} sx={{ py: 1, px: 1 }}>
          <Box sx={{ width: "100%", p: "3%", bgcolor: "background.paper" }}>
            <Box sx={{ px: 2, py: 1 }}>
              <Typography gutterBottom variant="h4">
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
                  sx={{ fontSize: "16px", px: 1, py: 2, color: "green" }}
                >
                  20%
                </Typography>
              </Box>
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
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  {data?.map((el, i) => (
                    <FormControlLabel
                      value={i}
                      control={<Radio size="medium" color="success" />}
                      label="Female"
                    />
                  ))}
                </RadioGroup>
              </FormControl>
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
              >
                Add to cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
