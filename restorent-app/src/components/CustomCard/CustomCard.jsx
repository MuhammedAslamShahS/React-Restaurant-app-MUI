import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import shareIcon from "../../assets/share.png";

/* ---------- styled components ---------- */

const DishBox = styled(Box)(({ theme }) => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  maxWidth: 350,
  backgroundColor: "#fff",
  margin: theme.spacing(0, 2, 0, 2),

  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0),
  },

  "&:hover": {
    backgroundColor: "#f5f5f5",
    boxShadow: "0 5px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease-in-out",
  },
}));

const ImgContainer = styled(Box)(() => ({
  width: "100%",
}));

const InfoBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

/* ---------- component ---------- */

const CustomCard = ({ img, price, item, likes, heart, share }) => {
  return (
    <DishBox>
      <ImgContainer>
        <img src={img} alt={item} style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ p: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          ${price}
        </Typography>

        <Typography variant="body2" sx={{ my: 2 }}>
          {item}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <img src={likeIcon} alt="likes" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={heartIcon} alt="hearts" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {heart}
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={shareIcon} alt="shares" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {share}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </DishBox>
  );
};

export default CustomCard;
