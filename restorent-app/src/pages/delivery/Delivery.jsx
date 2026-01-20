import React from "react";
import { Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";

import deliveryImg from "../../assets/DeliveryImg.png";
import CustomButton from "../../components/CustomButton/CustomButton";

/* ---------- styled components ---------- */

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#FED801",
  height: "416px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3, 3, 0, 3),
    width: "90%",
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 0, 2),

  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

/* ---------- component ---------- */

const Delivery = () => {
  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: 700,
              mb: 3,
            }}
          >
            Fast & Reliable Delivery
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
              mb: 4,
            }}
          >
            Enjoy quick and hassle-free delivery right to your doorstep with
            our trusted service.
          </Typography>

          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Order Now"
          />
        </CustomBox>

        <Box>
          <img
            src={deliveryImg}
            alt="delivery"
            style={{ maxWidth: "100%" }}
          />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Delivery;
