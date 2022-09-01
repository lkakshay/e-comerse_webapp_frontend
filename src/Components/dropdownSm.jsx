import React from "react";
import { Box, Grid } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector, useDispatch } from "react-redux";
import { openLoginPopUP } from "../Redux/reducers/authReducer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";

export const DropdownSm = ({ setopenDrawer }) => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.authReducer.authStatus);


  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          backgroundColor: "#ffffff",
          m: 0,
          height: "40px",
          border: "none",
        }}
      >
        <Grid item sm={3} xs>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <MenuOutlinedIcon
              fontSize="large"
              sx={{ color: "#00081c" }}
              onClick={() => setopenDrawer(true)}
            />
          </Box>
        </Grid>
        
        <Grid item sm={3} xs>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <SearchOutlinedIcon fontSize="large" sx={{ color: "#00081c" }} />
          </Box>
        </Grid>
        <Grid item sm={3} xs>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ShoppingCartOutlinedIcon
              fontSize="large"
              sx={{ color: "#00081c" }}
            />
          </Box>
        </Grid>
        <Grid item sm={3} xs>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {authStatus?(
              <AccountCircleIcon fontSize="large" sx={{ color: "#00081c" }} />
            ) : (
              <LoginIcon
                onClick={() => dispatch(openLoginPopUP())}
                fontSize="large"
                sx={{ color: "#00081c" }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
