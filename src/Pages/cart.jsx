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
import {
  getCartData,
  editAndUpdateCart,
  getLaterData,
  deleteAndUpdateCart,
} from "../Redux/reducers/cartReducer";
import { Bill } from "../utils/helpers/bill";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartData, laterData } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [bill, setBill] = useState({});
  useEffect(() => {
    dispatch(getCartData());
    dispatch(getLaterData());
  }, []);

  useEffect(() => {
    if (cartData) {
      if (cartData.length !== 0) {
        setBill(Bill(cartData));
      }
    }
  }, [cartData]);

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
          <div>
            {cartData.length === 0 ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 900,
                    fontFamily: "sans-serif",
                    fontSize: "28px",
                  }}
                >
                  Your cart is empty!
                </Typography>
                <Typography sx={{ color: "00081c" }}
                onClick={()=>navigate('/')}>
                  continue shoping
                </Typography>
              </div>
            ) : (
              <></>
            )}
            {cartData?.map((e) => (
              <Grid container sx={{ backgroundColor: "white" }} key={e._id}>
                <Grid item xs={12} sm={12} md={12} lg={9}>
                  <Grid container>
                    <Grid item xs={3} sx={{ p: "2%" }}>
                      <img
                        style={{ width: "100%", aspectRatio: 1 }}
                        src={e.product_id.image[0]}
                        onClick={()=>navigate("/product/"+e.product_id._id)}
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
                          {e.product_id.name}
                        </Typography>

                        <Rating
                          name="half-rating-read"
                          value={e.product_id.rating}
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
                            ₹ {e.product_id.discount}
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
                              ((e.product_id.price - e.product_id.discount) /
                                e.product_id.price) *
                                100
                            )}
                            %
                          </Typography>
                        </Box>

                        <div>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#00081c" }}
                            onClick={()=>navigate('/singlecart/'+e.product_id._id)}
                          >
                            BUY NOW
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#00081c", m: 1 }}
                            onClick={() => dispatch(deleteAndUpdateCart(e._id))}
                          >
                            remove
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#00081c" }}
                            onClick={() =>
                              dispatch(
                                editAndUpdateCart({
                                  id: e._id,
                                  data: { later: true },
                                })
                              )
                            }
                          >
                            save for later
                          </Button>
                        </div>
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
            ))}
          </div>

          <div style={{ marginTop: "20px", backgroundColor: "white" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "20px", fontWeight: 600, padding: "6px 10px" }}
            >
              Saved for later({laterData.length})
            </Typography>
            {laterData?.map((e) => (
              <Grid container sx={{ backgroundColor: "white" }} key={e._id}>
                <Grid item xs={12} sm={12} md={12} lg={9}>
                  <Grid container>
                    <Grid item xs={3} sx={{ p: "2%" }}>
                      <img
                        style={{ width: "100%", aspectRatio: 1 }}
                        src={e.product_id.image[0]}
                        onClick={()=>navigate("/product/"+e.product_id._id)}
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
                        ></div>
                      </div>
                    </Grid>
                    <Grid item xs={9}>
                      <Box sx={{ px: 2, py: 1 }}>
                        <Typography
                          gutterBottom
                          variant="h4"
                          sx={{ fontSize: "18px" }}
                        >
                          {e.product_id.name}
                        </Typography>

                        <Rating
                          name="half-rating-read"
                          value={e.product_id.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                        <Box sx={{ display: "flex" }}>
                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: "900",
                              px: 1,
                              py: 2,
                            }}
                          >
                            ₹ {e.product_id.discount}
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
                              ((e.product_id.price - e.product_id.discount) /
                                e.product_id.price) *
                                100
                            )}
                            %
                          </Typography>
                        </Box>

                        <div>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#00081c", m: 1 }}
                            onClick={() => dispatch(deleteAndUpdateCart(e._id))}
                          >
                            remove
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{ backgroundColor: "#00081c" }}
                            onClick={() =>
                              dispatch(
                                editAndUpdateCart({
                                  id: e._id,
                                  data: { later: false },
                                })
                              )
                            }
                          >
                            move to cart
                          </Button>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3}></Grid>
              </Grid>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} sx={{ py: 1, px: 1 }}>
          {cartData.length !== 0 ? (
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
                      {bill.count === 1
                        ? `Price (${bill.count} item)`
                        : `Price (${bill.count} items)`}
                    </ListItemText>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "600", fontSize: "16px" }}
                    >
                      ₹ {bill.amount}
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Discount</ListItemText>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "green",
                      }}
                    >
                      -₹{bill.discount}
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
                      ₹ {bill.total}
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
                      You will save ₹{bill.discount} on this order
                    </ListItemText>
                  </MenuItem>
                </MenuList>
                <Button sx={{backgroundColor: "#00081c" }} color="success" fullWidth variant="contained">
                  checkout
                </Button>
              </Paper>
            </Box>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <div style={{height:'600px',backgroundColor: "#ebf0f0"}}></div>
    </React.Fragment>
  );
};
