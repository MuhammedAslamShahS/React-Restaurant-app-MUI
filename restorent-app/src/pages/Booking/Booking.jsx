import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import buyIcon from "../../assets/buy_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import rentIcon from "../../assets/sell_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "../../components/CustomButton/CustomButton";

/* ---------- styled components ---------- */

const CustomBox = styled(Box)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: 0,
    flexDirection: "column",
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),

  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0),
  },
}));

const LinkBox = styled(Box)(() => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
}));

/* ---------- component ---------- */

const Booking = () => {
  const guides = [
    {
      icon: buyIcon,
      title: "Order Guides",
      linkText: "How to order",
    },
    {
      icon: rentIcon,
      title: "Booking Guides",
      linkText: "How to Book",
    },
    {
      icon: sellIcon,
      title: "Payment Guides",
      linkText: "Payment Methods",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* top line */}
      <Box
        sx={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          mb: 3,
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "#000339",
          my: 3,
        }}
      >
        How to Book?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you book for advance slot
        </Typography>
      </CustomBox>

      <GuidesBox>
        {guides.map((guide) => (
          <GuideBox key={guide.title}>
            <img src={guide.icon} alt={guide.title} />

            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: "20px",
                color: "#3B3C45",
                my: 1,
              }}
            >
              {guide.title}
            </Typography>

            <LinkBox>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  color: "#0689FF",
                  mr: 0.5,
                }}
              >
                {guide.linkText}
              </Typography>
              <ArrowRightAltIcon sx={{ color: "#0689FF" }} />
            </LinkBox>
          </GuideBox>
        ))}
      </GuidesBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn
      />
    </Box>
  );
};

export default Booking;
