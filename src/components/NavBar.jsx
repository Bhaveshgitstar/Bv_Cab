import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import HomeGrid from "./HomeGrid";
const loginOptions = ["Login", "Register"];

const NavBar = () => {
  const [isProfilePressed, setIsProfilePressed] = useState(false);

  const handleProfileClick = () => {
    setIsProfilePressed(!isProfilePressed);
    console.log(isProfilePressed);
  };
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#000000", height: "3.75rem" }}>
        <Toolbar>
          <Box
            component="img"
            sx={{
              height: "52px",
              mr: "0.5rem",
            }}
            alt="Your logo."
            src={"bv_logo.png"}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div" sx={{}}>
              BUREAU VERITAS
            </Typography>
          </Box>
          {/* <Box
            display={{ xs: "none", md: "flex" }}
            sx={{ flexGrow: 1, maxWidth: "20rem" }}
          >
            <Tooltip title="Book a ride">
              <Box display={{ xs: "none", md: "flex" }}>
                <LocationOnIcon sx={{ width: "30px", height: "30px" }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: "1rem" }}
                >
                  Book a ride
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="Book a ride">
              <Box display={{ xs: "none", md: "flex" }}>
                <DirectionsCarIcon
                  sx={{ width: "30px", height: "30px", mr: "0.25rem" }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: "1rem" }}
                >
                  Add a ride
                </Typography>
              </Box>
            </Tooltip>
          </Box> */}
          <Box
            component="img"
            sx={{
              width: "38px",
              height: "36px",
            }}
            alt="Your logo."
            src={"profileIcon.png"}
            onClick={handleProfileClick}
          />
          {!isProfilePressed && (
            <ArrowDropDownIcon
              sx={{
                width: "2rem",
                height: "auto",
              }}
              onClick={handleProfileClick}
            />
          )}
          {isProfilePressed && (
            <ArrowDropUpIcon
              sx={{
                width: "2rem",
                height: "auto",
              }}
              onClick={handleProfileClick}
            />
          )}
          <Menu
            sx={{ mt: "45px" }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isProfilePressed}
            onMouseDown={handleProfileClick}
          >
            {loginOptions.map((login) => (
              <MenuItem key={login}>
                <Typography sx={{ minWidth: "200px", verticalAlign: "middle" }}>
                  {login} 
                </Typography>
                <KeyboardArrowRightIcon />
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      {/* <HomeGrid/> */}
    </>
  );
};

export default NavBar;
