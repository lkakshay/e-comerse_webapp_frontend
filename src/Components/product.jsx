import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Rating, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openLoginPopUP } from "../Redux/reducers/authReducer";

export const Product = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.authReducer.authStatus);
  return (
    <Card
      onClick={() => navigate("/product/" + data._id)}
      sx={{
        width: "100%",
        m: "5%",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        borderRadius: "0px",
      }}
    >
      <img
        style={{ width: "100%", height: "auto", aspectRatio: "4/3" }}
        src={data.image[0]}
      />
      <Stack spacing={1} sx={{ px: "7%", py: "3%" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
          {data.name}
        </Typography>
        <Rating
          name="half-rating-read"
          value={data.rating}
          precision={0.1}
          readOnly
          size="small"
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "600" }} color="black">
            ₹ {data.discount}
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
            ₹{data.price}
          </Typography>
        </Box>
      </Stack>
      <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (authStatus) {
             //route
              return;
            }
            dispatch(openLoginPopUP());
          }}
          sx={{
            width: "50%",
            backgroundColor: "#00081c",
            fontSize: "10px",
            py: "5%",
            fontWeight: "600",
          }}
          size="small"
          variant="contained"
        >
          BUY NOW
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (authStatus) {
              //api call

              return;
            }
            dispatch(openLoginPopUP());
          }}
          sx={{
            width: "50%",
            backgroundColor: "#00081c",
            fontSize: "10px",
            py: "5%",
            fontWeight: "600",
          }}
          size="small"
          variant="contained"
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};
