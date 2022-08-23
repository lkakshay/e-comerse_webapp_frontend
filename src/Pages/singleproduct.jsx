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
            backgroundColor: "white",
            height: "300px",
            border: "2px solid black",
          }}
        ></Grid>
        <Grid container xs={12} md={12} sm={12} lg={6} sx={{ my: 1, pl: 1 }}>
          <Box sx={{ width: "100%", p: 2, bgcolor: "background.paper" }}>
            <Box sx={{ my: 1, mx: 1 }}>
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

              <Typography color="text.secondary" variant="body2">
                Pinstriped cornflower blue cotton blouse takes you on a walk to
                the park or just down the hall.
              </Typography>
            </Box>
            <Divider variant="middle" />
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
            <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
              <Button>Add to cart</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
