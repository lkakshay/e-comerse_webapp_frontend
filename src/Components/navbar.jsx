import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DropdownLg } from "./dropdownLg";
import { DropdownSm } from "./dropdownSm";

import { AppBar, Badge, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";


import { DrawerComponent } from "./drawer";
import { Box } from "@mui/system";
import { openLoginPopUP } from "../Redux/reducers/authReducer";
import { getCartData } from "../Redux/reducers/cartReducer";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const authStatus = useSelector((state) => state.authReducer.authStatus);
  const cartData = useSelector((state) => state.cartReducer.cartData);
  const screenSize = useSelector((state) => state.MediaqueryReducer.screenSize);
  const [dimension, setdimension] = useState({
    status: false,
    heading: "20px",
  });
  const [openDrawer, setopenDrawer] = useState(false);

  useEffect(() => {
    if (screenSize === "lg") setdimension({ ...dimension, status: false });
    else if (screenSize === "sm") setdimension({ ...dimension, status: true });
    else if (screenSize === "sx")
      setdimension({ ...dimension, status: true, heading: "16px" });
  }, [screenSize]);
  useEffect(()=>{
     setTimeout(() => {
      dispatch(getCartData())
     }, 500);
  },[authStatus])

  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "#00081c", boxShadow: "none" }}
        position="sticky"
      >
        <Toolbar>
          {dimension.status ? (
            <></>
          ) : (
            <MenuSharpIcon
              onClick={() => setopenDrawer(true)}
              fontSize="large"
            />
          )}
          {dimension.status ? (
            <></>
          ) : (
            <Typography sx={{ fontSize: "30px", fontWeight: "900", ml: 1 }}
            onClick={()=>navigate('/')}>
              E.CoM
            </Typography>
          )}

          <Typography
            sx={{
              fontSize: dimension.heading,
              fontWeight: "900",
              textAlign: "right",
              width: "100%",
              mr: 1,
              fontFamily: " DWFutura,sans-serif",
            }}
          >
            E C O M E R C E
          </Typography>
          <Typography
            sx={{
              fontSize: dimension.heading,
              fontWeight: "900",
              textAlign: "left",
              width: "100%",
              ml: 1,
              fontFamily: " DWFutura,sans-serif",
            }}
          >
            W E B A P P
          </Typography>

          {dimension.status ? (
            <></>
          ) : (
            <React.Fragment>
              <Box sx={{ ml: "auto", display: "flex", gap: "20px", mr: 1 }}>
                {dimension.status ? <></> : <SearchIcon fontSize="large" />}
                <Badge badgeContent={cartData?cartData.length:0} color='primary' 
                onClick={()=>{
                  if(authStatus)
                  navigate('/cart')
                  else
                  dispatch(openLoginPopUP())
                }}>
                <ShoppingCartIcon fontSize="large" />
                </Badge>

                {authStatus ? (
                  <AccountCircleIcon fontSize="large" />
                ) : (
                  <LoginIcon
                    onClick={() => dispatch(openLoginPopUP())}
                    fontSize="large"
                  />
                )}
              </Box>
            </React.Fragment>
          )}
        </Toolbar>
        {openDrawer ? (
          <DrawerComponent
            setopenDrawer={setopenDrawer}
            openDrawer={openDrawer}
          />
        ) : (
          <></>
        )}
        {dimension.status ? (
          <DropdownSm setopenDrawer={setopenDrawer} />
        ) : (
          <DropdownLg />
        )}
      </AppBar>
    </React.Fragment>
  );
};
