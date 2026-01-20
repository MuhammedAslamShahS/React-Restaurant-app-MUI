import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from "../../components/CustomButton/CustomButton";
import welcome from "../../assets/welcome.png";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#fff",
  fontWeight: "bold",
  margin: theme.spacing(4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const Welcome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FED801",
        minHeight: "80vh",
        paddingTop: 8, // ✅ padding instead of margin
      }}
    >
      <Container>
        <CustomBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: 500,
                mb: 4,
              }}
            >
              Welcome to devdopz caffee
            </Typography>

            <Title>Discover a Place where you'll love to Eat</Title>

            <Typography sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
              Immerse yourself in the element ambiance as you savor each bite, accompanied by our
              extensive selection of hand-picked wines and carefully
            </Typography>

            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              welcomeBtn
            />
          </Box>

          <Box sx={{ flex: 1.25 }}>
            <img
              src={welcome}
              alt="welcome"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Welcome;
