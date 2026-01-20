import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FED801",
  textAlign: "center",
  padding: theme.spacing(4),
}));

const ErrorCode = styled(Typography)(({ theme }) => ({
  fontSize: "120px",
  fontWeight: 800,
  color: "#000339",
  lineHeight: 1,

  [theme.breakpoints.down("sm")]: {
    fontSize: "80px",
  },
}));

const Message = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  color: "#5A6473",
  marginTop: theme.spacing(2),
  maxWidth: "500px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const HomeButton = styled("button")(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: "16px",
  fontWeight: 600,
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#0F1B4C",
  color: "#fff",

  "&:hover": {
    opacity: 0.9,
  },
}));

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>

      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#000339",
          mt: 1,
        }}
      >
        Oops! Page not found
      </Typography>

      <Message>
        The page you’re looking for doesn’t exist or was moved.  
        Don’t worry, good food (and the homepage) is just one click away.
      </Message>

      <HomeButton onClick={() => navigate("/")}>
        Go Back Home
      </HomeButton>
    </Wrapper>
  );
};

export default NotFound;
