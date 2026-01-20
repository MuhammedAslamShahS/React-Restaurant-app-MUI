import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";

const FooterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const FooterLink = styled("span")(({ theme }) => ({
  display: "block",
  fontSize: "16px",
  color: "#000066",
  fontWeight: 300,
  cursor: "pointer",
  marginBottom: theme.spacing(1),
  "&:hover": {
    color: "#66B2FF",
  },
}));

const Footer = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#FFF682" }}>
      <FooterContainer>
        {/* Column 1 */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#1C1C1D",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Featured
          </Typography>

          <FooterLink>Guides</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Contact Us</FooterLink>
        </Box>

        {/* Column 2 */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#1C1C1D",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Overview
          </Typography>

          <FooterLink>Location</FooterLink>
          <FooterLink>Partnerships</FooterLink>
          <FooterLink>Terms of use & Privacy Policies</FooterLink>
        </Box>

        {/* Column 3 */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#1C1C1D",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Keep in touch with our social media pages.
          </Typography>

          <IconBox>
            <img src={fbIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
          </IconBox>
        </Box>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
