import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlaylistIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));
const NavBarLink = styled(Typography)(() => ({
    fontSize: "14px",
    color: "#4f5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
        color: "white",
    },
}));

const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));

const Header = () => {
    const navTitles = [
        { path: "/", display: "Home" },
        { path: "/", display: "Dishes" },
        { path: "/", display: "Services" },
        { path: "/", display: "About Us" },
    ];

    return (
       <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    backgroundColor: "#FED801",
  }}
>
  {/* LEFT SIDE */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 4,
    }}
  >
    <CustomMenuIcon />
    <NavBarLogo src={logoImg} />

    <NavBarLinksBox>
      {navTitles.map((item) => (
        <NavBarLink variant="body2" key={item.display}>
          {item.display}
        </NavBarLink>
      ))}
    </NavBarLinksBox>
  </Box>

  {/* RIGHT SIDE */}
  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
    <NavBarLink variant="body2">Sign Up</NavBarLink>
    <CustomButton
      backgroundColor="#0F1B4C"
      color="#fff"
      buttonText="Register"
    />
  </Box>
</Box>

    );
};

export default Header;
