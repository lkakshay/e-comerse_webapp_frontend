import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { Recent } from "../Components/recent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bill } from "../utils/helpers/bill";
import { useNavigate, useParams } from "react-router-dom";
import API from '../api/config'
import { token } from "../utils/helpers/tooken";

export const SingleCart = () => {

    const { id } = useParams()
  const navigate = useNavigate();
  const [data, setData] = useState({});

 
  useEffect(() => {
    const jwt=token()
    API.get("products/single", {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { id },
      })
        .then((res) => {
          setData(res.data);
          console.log("res.data", res.data);
        })
  
        .catch((e) => {
          console.log("e", e);
        });

   
  }, []);


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
    
            
            
              <Grid container sx={{ backgroundColor: "white" }} >
                <Grid item xs={12} sm={12} md={12} lg={9}>
                  <Grid container>
                    <Grid item xs={3} sx={{ p: "2%" }}>
                      <img
                        style={{ width: "100%", aspectRatio: 1 }}
                        src={data.image ? data.image[0] : ""}
                        onClick={()=>navigate("/product/"+data._id)}
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
                    <Grid item xs={9}>
                      <Box sx={{ px: 2, py: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h4"
                          sx={{ fontSize: "18px" }}
                        >
                          {data.name}
                        </Typography>

                        <Rating
                          name="half-rating-read"
                          value={data.rating ? data.rating: 0}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "900",
                              px: 1,
                              py: 2,
                            }}
                          >
                            ₹ {data.discount}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              px: 1,
                              py: 2,
                              color: "green",
                            }}
                          >
                            {Math.floor(
                              ((data.price - data.discount) /
                                data.price) *
                                100
                            )}
                            %
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3}>
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
          
            <Box>
              <Paper sx={{ maxWidth: "100%" }}>
                <MenuList>
                  <MenuItem>
                    <ListItemText sx={{ fontWeight: 900 }}>
                      PRICE DETAILS
                    </ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>
                      {`Price`}
                    </ListItemText>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "600", fontSize: "16px" }}
                    >
                      ₹ {data.price}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Disount</ListItemText>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "green",
                      }}
                    >
                      -₹{data.price-data.discount}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Delivery charge</ListItemText>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "green",
                      }}
                    >
                      FREE
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText>Total Amount </ListItemText>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      ₹ {data.discount}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemText
                      sx={{
                        fontWeight: "600",
                        fontSize: "12px",
                        color: "green",
                      }}
                    >
                      You will save ₹{data.price-data.discount} on this order
                    </ListItemText>
                  </MenuItem>
                </MenuList>
                <Button sx={{backgroundColor: "#00081c" }} color="success" fullWidth variant="contained">
                  checkout
                </Button>
              </Paper>
            </Box>
        </Grid>
      </Grid>

      <div style={{height:'600px',backgroundColor: "#ebf0f0"}}></div>
    </React.Fragment>
  );
};
