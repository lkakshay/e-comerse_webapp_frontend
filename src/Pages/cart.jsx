import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Recent } from "../Components/recent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import ListItemIcon from "@mui/material/ListItemIcon";

import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";

export const Cart = () => {
  return (
    <React.Fragment>
      <Grid container sx={{ backgroundColor: "#ebf0f0", px: 1 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          sx={{
            my: 1,
            px: 1,
          }}
        >
          <Grid container sx={{ backgroundColor: "white" }}>
            <Grid xs={12} sm={12} md={12} lg={9}>
              <Grid container>
                <Grid xs={3} sx={{ p: "2%" }}>
                  <img
                    style={{ width: "100%", aspectRatio: 1 }}
                    src="https://rukminim1.flixcart.com/image/224/224/l15bxjk0/headphone/h/p/w/rma2105-realme-original-imagcsfvjhsygg6x.jpeg?q=90"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <button>-</button>
                      <button style={{ border: "none" }}>1</button>
                      <button>+</button>
                    </div>
                  </div>
                </Grid>
                <Grid xs={9}>
                  <Box sx={{ px: 2, py: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      sx={{ fontSize: "23px" }}
                    >
                      Toothbrush
                    </Typography>

                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{
                          fontSize: "26px",
                          fontWeight: "900",
                          px: 1,
                          py: 2,
                        }}
                      >
                        ₹ 356
                      </Typography>
                      <Typography
                        sx={{ fontSize: "16px", px: 1, py: 2, color: "green" }}
                      >
                        20%
                      </Typography>
                    </Box>

                    <div>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#00081c" }}
                      >
                        BUY NOW
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#00081c", m: 1 }}
                      >
                        remove
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#00081c" }}
                      >
                        save for later
                      </Button>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} sm={12} md={12} lg={3}>
              <Box sx={{ p: 2 }}>
                <Typography variant="body" sx={{ fontSize: "16px", px: 1 }}>
                  Delivery by Sun Aug 28
                </Typography>
                <Typography
                  sx={{ fontSize: "16px", px: 1, py: 1, color: "green" }}
                >
                  Free delivery
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} sx={{ py: 1, px: 1 }}>
          <Box >
            <Paper sx={{  maxWidth: "100%" }}>
              <MenuList>
                <MenuItem>
                  <ListItemText sx={{fontWeight:900}}>PRICE DETAILS</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Cut</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Copy</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘C
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Paste</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘V
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
