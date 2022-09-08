import React, { useState } from "react";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const DropdownLg = () => {
  const [heading, setHeading] = useState([
    {
      name: "Clothing",
      display: "none",
      border: "none",
      subs: [
        { name: "For Men", path: "Clothing >> Men's Clothing" },
        { name: "For Women ", path: "Clothing >> Women's Clothing" },
        { name: "For Kids", path: "Clothing >> Kids' Clothing" },
      ],
    },
    {
      name: "Footwear",
      display: "none",
      border: "none",
      subs: [
        { name: "Kids Footwear", path: "Footwear >> Kids' & Infant Footwear" },
        { name: " Men's Footwear", path: "Footwear >> Men's Footwear" },
        { name: "Women`s Footwear", path: "Footwear >> Women's Footwear" },
      ],
    },
    {
      name: "Baby Care",
      display: "none",
      border: "none",
      subs: [
        { name: "Kids Gifts", path: "Baby Care >> Baby & Kids Gifts" },
        { name: "Bath & Skin", path: "Baby Care >> Baby Bath & Skin" },
        { name: "Baby Bedding", path: "Baby Care >> Baby Bedding" },
        { name: "Infant Wear", path: "Baby Care >> Infant Wear" },
      ],
    },
    {
      name: "Personal Care",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Bath and Spa",
          path: "Beauty and Personal Care >> Bath and Spa",
        },
        {
          name: "Skin Care",
          path: "Beauty and Personal Care >> Body and Skin Care",
        },
        {
          name: "Combos and Kits",
          path: "Beauty and Personal Care >> Combos and Kits",
        },
        { name: "Hair Care", path: "Beauty and Personal Care >> Hair Care" },
        { name: "Makeup", path: "Beauty and Personal Care >> Makeup" },
        { name: "Fragrances", path: "Beauty and Personal Care >> Fragrances" },
      ],
    },
    {
      name: "Jewellery",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Rings",
          path: "Jewellery >> Rings",
        },
        {
          name: "Jewellery Sets",
          path: "Jewellery >> Jewellery Sets",
        },
        { name: "Earrings", path: "Jewellery >> Earrings" },
        { name: "Accessories", path: "Jewellery >> Accessories" },
      ],
    },
    {
      name: "Home Furnishing",
      display: "none",
      border: "none",
      subs: [
        {
          name: "Bed Linen",
          path: "Home Furnishing >> Bed Linen",
        },
        {
          name: "Curtains & Accessories",
          path: "Home Furnishing >> Curtains & Accessories",
        },
        {
          name: "Living Room Furnishing ",
          path: "Home Furnishing >> Living Room Furnishing",
        },
        {
          name: "Floor Coverings",
          path: "Home Furnishing >> Floor Coverings",
        },
        {
          name: "Living",
          path: "Home Furnishing >> Living",
        },
      ],
    },
  ]);

  const navigate = useNavigate();

  const handleEvent = (i, x) => {
    if (x) {
      let temp = [...heading];
      temp[i].display = "grid";
      temp[i].border = "2px solid black";
      setHeading(temp);
    } else {
      let temp = [...heading];
      temp[i].display = "none";
      temp[i].border = "none";
      setHeading(temp);
    }
  };

  const changebackground = (e, x) => {
    if (x) e.target.style.background = "#e2f8f8";
    else e.target.style.background = "#ffffff";
  };

  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          backgroundColor: "#ffffff",
          my: 0,
          height: "40px",
          px: 2,
          border: "none",
        }}
      >
        {heading?.map((e, i) => (
          <Grid
            key={i}
            item
            md
            lg={12 / 6}
            onMouseEnter={() => handleEvent(i, true)}
            onMouseLeave={() => handleEvent(i, false)}
          >
            <Box sx={{ color: "black", textAlign: "center", pt: 0.5, pb: 0 }}>
              <Typography
                variant="overline"
                align="center"
                sx={{ fontSize: "14px", borderBottom: e.border, pb: 1 }}
              >
                {e?.name}
              </Typography>

              {e.display === "grid" ? (
                <List
                  on
                  sx={{
                    display: e.display,
                    mt: 0,
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                >
                  {e.subs?.map((sub, i) => (
                    <ListItem
                      key={i}
                      alignItems="center"
                      onClick={() => {
                        navigate(`/products?category=${sub.path}`);
                      }}
                      sx={{ background: "#ffffff" }}
                    >
                      <Typography
                        variant="overline"
                        align="center"
                        onMouseEnter={(e) => changebackground(e, true)}
                        onMouseLeave={(e) => changebackground(e, false)}
                      >
                        {sub.name}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <></>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
