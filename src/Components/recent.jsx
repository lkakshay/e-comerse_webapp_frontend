import { Grid, Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";
import { Rating } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Recent = () => {
  return (
    <React.Fragment>
      <Typography
        sx={{
          fontWeight: "bolder",
          mt: "3%",
          px: "3%",
          py: "5px",
          textAlign: "left",
        }}
        variant="h5"
        color="#00081c"
      >
        RECENT
      </Typography>
      <Box sx={{ backgroundColor: "#ebf0f0" }}>
        <Grid container sx={{ backgroundColor: "#ffffff", p: "2%" }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  width: "100%",
                  m: "3%",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                  borderRadius: "0px",
                }}
              >
                <img
                  style={{ width: "100%", height: "auto", aspectRatio: "4/3" }}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
                />
                <Stack spacing={1} sx={{ px: "7%", py: "3%" }}>
                  <Typography variant="h6">Lizard</Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "600" }} color="black">
                      ₹ 256
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "00",
                        fontSize: "13px",
                        textDecoration: "line-through",
                        ml: "7%",
                      }}
                      color="black"
                    >
                      ₹400
                    </Typography>
                  </Box>
                </Stack>
                <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
                  <Button size="small">BUY NOW</Button>
                  <Button size="small">ADD TO CART</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};
