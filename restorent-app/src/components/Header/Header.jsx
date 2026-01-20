import { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlaylistIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

/* ---------- styled components ---------- */

const NavBarLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
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

/* ---------- component ---------- */

const Header = () => {
  const navigate = useNavigate(); // ✅ hook INSIDE component

  const nav_titles = [
    { path: "/", display: "Home" },
    { path: "/dishes", display: "Dishes" },
    { path: "/services", display: "Services" },
    { path: "/about", display: "About Us" },
  ];

  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toggleDrawer = (anchor, open) => () => {
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const drawerList = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(anchor, false)}>
      <List>
        {nav_titles.map((item, index) => (
          <ListItem
            key={item.display}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlaylistIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
      {/* LEFT */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
        <Drawer
          anchor="left"
          open={mobileMenu.left}
          onClose={toggleDrawer("left", false)}
        >
          {drawerList("left")}
        </Drawer>

        <NavBarLogo src={logoImg} alt="logo" />

        <NavBarLinksBox>
          {nav_titles.map((item) => (
            <NavBarLink
              key={item.display}
              onClick={() => navigate(item.path)}
            >
              {item.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

      {/* RIGHT */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        <NavBarLink>Sign Up</NavBarLink>
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
